import axiosInstance from './axiosInstance';

export const fetchLogs = async () => {
  try {
    const response = await axiosInstance.get('/log');
    return response.data;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
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
  }
};

export const fetchWeeklyLog = async () => {
  try {
    const response = await axiosInstance.get('/log/weekly');
    return response.data;
  } catch (error) {
    console.error('Error fetching weekly log:', error);
    throw error;
  }
};