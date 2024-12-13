import React from 'react';
import { Card, ProgressWrapper, ProgressBar, ButtonGroup, ActionButton } from './styles/GoalCard.styles';

interface GoalCardProps {
  id: number;
  name: string;
  description: string;
  amount: number;
  saved: number;
  onDelete: () => void;
  onComplete: () => void;
}

const GoalCard: React.FC<GoalCardProps> = ({ name, description, amount, saved, onDelete, onComplete }) => {
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

export default GoalCard;
