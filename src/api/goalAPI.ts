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
    // FIXME: 에러 처리를 더 세분화하여 사용자에게 적절한 메시지를 제공
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
    // TODO: 서버 응답에 따라 에러 메시지를 사용자 친화적으로 변경
  }
};