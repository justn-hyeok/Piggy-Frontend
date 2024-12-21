import React from 'react';
import { GoalCard } from '../components/GoalManagement/GoalCard';
import { useGoals } from '../hooks/useGoals';
import styled from 'styled-components';
import { THEME } from '../constants/theme';

export const GoalManagement: React.FC = () => {
  const { goals, newGoal, setNewGoal, addGoal, deleteGoal, completeGoal } = useGoals();

  return (
    <Container>
      <Title>목표 관리</Title>

      {/* 새 목표 입력 */}
      <InputWrapper>
        <input
          type="text"
          placeholder="목표 이름"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="목표 금액"
          value={newGoal.amount || ''}
          onChange={(e) => setNewGoal({ ...newGoal, amount: Number(e.target.value) })}
        />
        <input
          type="text"
          placeholder="목표 설명"
          value={newGoal.description}
          onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
        />
        <AddGoalButton onClick={addGoal}>추가하기</AddGoalButton>
      </InputWrapper>

      {/* 목표 카드 표시 */}
      {goals.length > 0 ? (
        <GoalCard
          {...goals[0]} // 첫 번째 목표만 렌더링
          onDelete={() => deleteGoal(goals[0].id, goals[0].name)}
          onComplete={() => completeGoal(goals[0].name)}
        />
      ) : (
        <EmptyMessage>현재 목표가 없습니다. 새 목표를 추가해보세요!</EmptyMessage>
      )}
    </Container>
  );
};

/* 스타일 정의 */
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: 100px auto 0;
  background: ${THEME.colors.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  color: ${THEME.colors.text};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 8px 10px;
    font-size: 14px;
    border: 1px solid ${THEME.colors.accent};
    border-radius: 4px;
    background: ${THEME.colors.background};
    color: ${THEME.colors.text};
    outline: none;
    height: 40px;
  }
`;

const AddGoalButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background: ${THEME.colors.accent};
  color: ${THEME.colors.text};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${THEME.colors.text};
    color: ${THEME.colors.accent};
  }
`;

const EmptyMessage = styled.p`
  color: ${THEME.colors.text};
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
`;