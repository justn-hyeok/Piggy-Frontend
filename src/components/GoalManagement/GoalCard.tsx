import React from 'react';
import styled from 'styled-components';

interface GoalCardProps {
  id: number;
  name: string;
  description: string;
  amount: number;
  saved: number;
  onDelete: () => void;
  onComplete: () => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({ name, description, amount, saved, onDelete, onComplete }) => {
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
        <ActionButton onClick={onComplete}>목표 완료</ActionButton>
        <ActionButton onClick={onDelete}>목표 삭제</ActionButton>
      </ButtonGroup>
    </Card>
  );
};

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
