import axiosInstance from './axiosInstance';

export const fetchGoals = async () => {
  try {
    const response = await axiosInstance.get('/goal');
    // 데이터 검증 및 변환
    if (Array.isArray(response.data)) {
      const goals = response.data.map((goal: any) => ({
        id: goal.id || null, // id가 없을 경우 null로 처리
        name: goal.goal_name || '이름 없음', // 기본 이름 설정
        description: goal.description || '', // 설명 기본값
        amount: goal.goal_value || 0, // 목표 금액 기본값
        saved: goal.saved_amount || 0, // 저장 금액 기본값
      }));
      return goals.filter((goal) => goal.id !== null); // id가 없는 목표 제거
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw error; // 에러 재발생
  }
};

export const createGoal = async (goal: {
  goal_value: number;
  goal_name: string;
  description?: string | null;
}) => {
  try {
    const response = await axiosInstance.post('/goal', goal);
    // 데이터 검증 및 반환
    const createdGoal = response.data;
    if (createdGoal && createdGoal.id) {
      return {
        id: createdGoal.id,
        name: createdGoal.goal_name || '이름 없음',
        description: createdGoal.description || '',
        amount: createdGoal.goal_value || 0,
        saved: createdGoal.saved_amount || 0,
      };
    } else {
      throw new Error('Invalid response data');
    }
  } catch (error) {
    console.error('Error creating goal:', error);
    throw error; // 에러 재발생
  }
};
