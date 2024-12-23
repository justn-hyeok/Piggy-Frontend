import axiosInstance from './axiosInstance';

export const fetchGoals = async () => {
  try {
    const response = await axiosInstance.get('/goal');
    return response.data;
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

export const deleteGoal = async (goalId: number) => {
  try {
    const response = await axiosInstance.delete(`/goal/${goalId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw error;
  }
};

export const completeGoal = async (goalId: number) => {
  try {
    const response = await axiosInstance.patch(`/goal/${goalId}/complete`);
    return response.data;
  } catch (error) {
    console.error('Error completing goal:', error);
    throw error;
  }
};