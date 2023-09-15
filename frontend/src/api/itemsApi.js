import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000"
});

export const search = async search => {
  try {
    const response = await instance.get(`/api/items?search=${search}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getItem = async id => {
  try {
    const response = await instance.get(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
