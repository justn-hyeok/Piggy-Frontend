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