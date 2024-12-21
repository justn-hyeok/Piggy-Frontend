export type GoalType = {
  id: string;
  name: string;
  amount: number;
  description: string;
  saved: number; // saved 속성 추가
};

const BASE_URL = 'http://localhost:5000';

// 목표 목록 불러오기 (GET)
export const fetchGoals = async (): Promise<GoalType[]> => {
  const response = await fetch(`${BASE_URL}/goal`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch goals');
  }

  const data: GoalType[] = await response.json();
  return data;
};

// 목표 추가하기 (POST)
export const addGoal = async (goal: Omit<GoalType, 'id'>): Promise<GoalType> => {
  const response = await fetch(`${BASE_URL}/goal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(goal),
  });

  if (!response.ok) {
    throw new Error('Failed to add goal');
  }

  const data: GoalType = await response.json();
  return data;
};
