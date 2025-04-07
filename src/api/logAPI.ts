import axiosInstance from './axiosInstance';

export const fetchLogs = async () => {
  try {
    const response = await axiosInstance.get('/log');
    return response.data;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
    // FIXME: 에러 메시지를 사용자 친화적으로 변경
  }
};

export const createLog = async (coin: number) => {
  try {
    const response = await axiosInstance.post('/log', {
      coin,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating log:', error);
    throw error;
    // TODO: 서버 응답에 따라 에러 메시지를 세분화
  }
};

export const fetchWeeklyLog = async () => {
  try {
    const response = await axiosInstance.get('/log/weekly');
    return response.data;
  } catch (error) {
    console.error('Error fetching weekly log:', error);
    throw error;
    // FIXME: 주간 로그 API 호출 실패 시 더미 데이터를 반환하도록 수정
  }
};