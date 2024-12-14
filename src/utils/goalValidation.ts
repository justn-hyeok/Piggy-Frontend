import { NewGoal } from '../types/goals';

export class GoalValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GoalValidationError';
  }
}

export const validateNewGoal = (goal: NewGoal): void => {
  if (!goal.name.trim()) {
    throw new GoalValidationError('목표 이름은 필수입니다.');
  }
  if (goal.amount <= 0) {
    throw new GoalValidationError('목표 금액은 0보다 커야 합니다.');
  }
};