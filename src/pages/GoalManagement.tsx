import React from 'react';
import { GoalCard } from '../components/GoalManagement/GoalCard';
import { useGoals } from '../hooks/useGoals';
import styled from 'styled-components';

export const GoalManagement = () => {
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
      {goals.length > 0 && (
        <GoalCard
          {...goals[0]} // 첫 번째 목표만 렌더링
          onDelete={() => deleteGoal(goals[0].id, goals[0].name)}
          onComplete={() => completeGoal(goals[0].name)}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 400px; /* 가로 최대 크기 제한 */
  padding: 20px;
  margin: 0 auto; /* 화면 중앙 정렬 */
  background: #1e1e1e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center; /* 제목 중앙 정렬 */
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 8px 10px; /* 인풋 크기 축소 */
    font-size: 14px; /* 텍스트 크기 축소 */
    border: 1px solid #404040;
    border-radius: 4px;
    background: #2c2c2c;
    color: white;
    outline: none;
    height: 40px; /* 높이 조정 */
  }
`;

const AddGoalButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background: #ECC1D7;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #ECC1D7;
  }
`;
