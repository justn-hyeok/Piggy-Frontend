import axiosInstance from './axiosInstance';

export const fetchGoals = async () => {
  try {
    const response = await axiosInstance.get('/goal');
    // 데이터 변환
    const goals = response.data.map((goal: any) => ({
      id: goal.id,
      name: goal.goal_name,
      description: goal.description,
      amount: goal.goal_value,
      saved: goal.saved_amount
    }));
    return goals;
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw error;
  }
};

export const createGoal = async (goal: {
  goal_value: number;
  goal_name: string;
  description?: string | null;
}) => {
  try {
    const response = await axiosInstance.post('/goal', goal);
    return response.data;
  } catch (error) {
    console.error('Error creating goal:', error);
    throw error;
  }
};