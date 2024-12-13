import React from 'react';
import GoalCard from '../components/GoalManagement/GoalCard';
import { Container, Title, AddGoalButton, InputWrapper } from '../components/GoalManagement/styles/GoalManagement.styles';
import { useGoals } from '../hooks/useGoals';

const GoalManagement = () => {
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

export default GoalManagement;
