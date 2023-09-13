import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000',
});

export const search = async (text) => {
  try {
    const response = await instance.get(`/api/items?search=gol`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

