import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import THEME from '../constants/theme';
import { fetchGoals, createGoal } from '../api/goalAPI';
import { GoalCard } from '../components/Goals/Card';

interface Goal {
  id: number;
  name: string;
  amount: number;
  description: string;
  saved: number;
}

const GoalPage: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState({
    name: '',
    amount: 0,
    description: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGoals = async () => {
      try {
        setLoading(true);
        const data = await fetchGoals();
        if (Array.isArray(data)) {
          const validGoals = data.filter((goal) => goal && goal.id); // 유효성 검사
          setGoals(validGoals.slice(0, 1));
        }
      } catch (error) {
        console.error('Error fetching goals:', error);
        setGoals([
          {
            id: 1,
            name: '자전거',
            amount: 500000,
            description: '새로운 자전거 구매하기',
            saved: 100000,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    loadGoals();
  }, []);

  const addGoal = async () => {
    if (goals.length >= 1) {
      alert('목표는 하나만 등록할 수 있습니다.');
      return;
    }

    if (!newGoal.name.trim() || newGoal.amount <= 0) {
      alert('목표 이름을 입력하고 금액은 0보다 커야 합니다.');
      return;
    }

    try {
      const addedGoal = await createGoal({
        goal_name: newGoal.name.trim(),
        goal_value: newGoal.amount,
        description: newGoal.description.trim() || '',
      });

      if (addedGoal && addedGoal.id) {
        setGoals((prev) => [...prev, addedGoal]);
      } else {
        throw new Error('Invalid goal data');
      }

      setNewGoal({ name: '', amount: 0, description: '' });
    } catch (error) {
      console.error('Error adding goal:', error);

      const dummyGoal = {
        id: new Date().getTime(),
        name: newGoal.name.trim(),
        amount: newGoal.amount,
        description: newGoal.description.trim() || '',
        saved: 0,
      };

      setGoals((prev) => [...prev, dummyGoal]);
    }
  };

  const handleCancel = (id: number) => {
    const shouldCancel = window.confirm('목표를 진짜 취소하시겠습니까?');
    if (shouldCancel) {
      setGoals((prev) => prev.filter((goal) => goal.id !== id));
    }
  };

  const handleComplete = (id: number) => {
    const goal = goals.find((g) => g.id === id);
    if (!goal) return;

    if (goal.saved >= goal.amount) {
      alert(`"${goal.name}" 목표를 완료했습니다!`);
      setGoals(goals.filter((g) => g.id !== id));
    } else {
      const shouldCancel = window.confirm(
        '목표 금액에 도달하지 못했습니다. 목표를 취소하시겠습니까?'
      );
      if (shouldCancel) {
        handleCancel(id);
      }
    }
  };

  if (loading) return <LoadingMessage>로딩 중...</LoadingMessage>;

  return (
    <Container>
      <Title>목표 관리</Title>

      <InputWrapper>
        <Input
          type="text"
          placeholder="목표 이름"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="목표 금액"
          value={newGoal.amount || ''}
          onChange={(e) =>
            setNewGoal({ ...newGoal, amount: Number(e.target.value) })
          }
        />
        <Input
          type="text"
          placeholder="목표 설명"
          value={newGoal.description || ''}
          onChange={(e) =>
            setNewGoal({ ...newGoal, description: e.target.value })
          }
        />
        <AddGoalButton onClick={addGoal}>추가하기</AddGoalButton>
      </InputWrapper>

      {goals.length > 0 ? (
        goals
          .filter((goal) => goal && goal.id)
          .map((goal) => (
            <GoalCard
              key={goal.id}
              {...goal}
              onComplete={() => handleComplete(goal.id)}
              onCancel={() => handleCancel(goal.id)}
            />
          ))
      ) : (
        <EmptyMessage>
          현재 목표가 없습니다. 새 목표를 추가해보세요!
        </EmptyMessage>
      )}
    </Container>
  );
};

const LoadingMessage = styled.div`
  text-align: center;
  color: ${THEME.colors.text};
  margin: 2rem 0;
  font-size: 1rem;
`;

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
`;

const Input = styled.input`
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid ${THEME.colors.accent};
  border-radius: 4px;
  background: ${THEME.colors.background};
  color: ${THEME.colors.text};
  outline: none;
  height: 40px;
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

export default GoalPage;
