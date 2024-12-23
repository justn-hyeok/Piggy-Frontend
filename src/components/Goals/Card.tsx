import React, { useState } from 'react';
import styled from 'styled-components';

interface GoalCardProps {
  id: number;
  name: string;
  description: string;
  amount: number;
  saved: number;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({
  id,
  name,
  description,
  amount,
  saved,
  onDelete,
  onComplete,
}) => {
  const progress = (saved / amount) * 100;

  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        목표 금액: {amount.toLocaleString()}₩ / 현재 저장: {saved.toLocaleString()}₩
      </p>
      <ProgressWrapper>
        <ProgressBar progress={progress} />
      </ProgressWrapper>
      <ButtonGroup>
        <ActionButton onClick={() => onComplete(id)}>목표 완료</ActionButton>
        <ActionButton onClick={() => onDelete(id)}>목표 삭제</ActionButton>
      </ButtonGroup>
    </Card>
  );
};

// GoalManagement 컴포넌트
export const GoalManagement: React.FC = () => {
  // 초기 상태: 빈 배열
  const [goals, setGoals] = useState<
    { id: number; name: string; description: string; amount: number; saved: number }[]
  >([]);

  // 목표 삭제 핸들러
  const handleDelete = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // 목표 완료 핸들러
  const handleComplete = (id: number) => {
    alert(`"${goals.find((goal) => goal.id === id)?.name}" 목표를 완료했습니다!`);
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <Container>
      <h2>목표 관리</h2>
      {goals.length > 0 ? (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            {...goal}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))
      ) : (
        <EmptyMessage>현재 목표가 없습니다. 새 목표를 추가해보세요!</EmptyMessage>
      )}
    </Container>
  );
};

// 스타일 정의
const Card = styled.div`
  background: #2c2c2c;
  padding: 16px;
  border-radius: 8px;
  color: white;
  margin-bottom: 16px;
`;

const ProgressWrapper = styled.div`
  margin-top: 8px;
  background: #404040;
  border-radius: 16px;
  height: 8px;
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background: #ECC1D7;
  transition: width 0.3s ease;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background: #404040;
  color: white;
  cursor: pointer;

  &:hover {
    background: #606060;
  }
`;

const Container = styled.div`
  padding: 16px;
  background: #1e1e1e;
  border-radius: 8px;
  color: white;
  max-width: 400px;
  margin: 0 auto;
`;

const EmptyMessage = styled.p`
  color: #ffffff;
  text-align: center;
  margin-top: 16px;
`;