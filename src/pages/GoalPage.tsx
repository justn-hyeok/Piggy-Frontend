import React, { useEffect, useState } from "react";
import styled from "styled-components";
import THEME from "../constants/theme";
import { fetchGoals, createGoal, deleteGoal, completeGoal } from "../api/goalAPI";
import { GoalCard } from "../components/Goals/Card";

interface Goal {
  id: number;
  name: string;
  amount: number;
  description: string;
  saved: number;
}

const GoalPage: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState({ name: "", amount: 0, description: "" });

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const data = await fetchGoals();
        setGoals(data);
      } catch (error: any) {
        console.error("Error fetching goals:", error.message);
        console.error("Request URL:", error.config?.url);
        console.error("Error code:", error.code);
      }
    };
    loadGoals();
  }, []);

  const addGoal = async () => {
    if (!newGoal.name || !newGoal.amount) {
      alert("목표 이름과 금액을 입력해주세요.");
      return;
    }

    try {
      const addedGoal = await createGoal({
        goal_name: newGoal.name,
        goal_value: newGoal.amount,
        description: newGoal.description || "",
      });
      setGoals((prev) => [...prev, addedGoal]);
      setNewGoal({ name: "", amount: 0, description: "" });
    } catch (error) {
      console.error("Error adding goal:", error);
    }
  };

  const deleteGoal = async (id: number) => {
    try {
      await deleteGoal(id);
      setGoals((prev) => prev.filter((goal) => goal.id !== id));
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  const completeGoal = async (id: number) => {
    try {
      await completeGoal(id);
      setGoals((prev) =>
        prev.map((goal) =>
          goal.id === id ? { ...goal, saved: goal.amount } : goal
        )
      );
    } catch (error) {
      console.error("Error completing goal:", error);
    }
  };

  return (
    <Container>
      <Title>목표 관리</Title>

      {/* 목표 추가 입력 */}
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
          value={newGoal.amount || ""}
          onChange={(e) => setNewGoal({ ...newGoal, amount: Number(e.target.value) })}
        />
        <input
          type="text"
          placeholder="목표 설명"
          value={newGoal.description || ""}
          onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
        />
        <AddGoalButton onClick={addGoal}>추가하기</AddGoalButton>
      </InputWrapper>

      {/* 목표 카드 표시 */}
      {goals.length > 0 ? (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            {...goal}
            onDelete={() => deleteGoal(goal.id)}
            onComplete={() => completeGoal(goal.id)}
          />
        ))
      ) : (
        <EmptyMessage>현재 목표가 없습니다. 새 목표를 추가해보세요!</EmptyMessage>
      )}
    </Container>
  );
};

export default GoalPage;

// 스타일 정의
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