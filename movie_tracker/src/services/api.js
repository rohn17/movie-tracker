import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const fetchData = async (endpoint) => {
  try {
    const res = await API.get(`${endpoint}?api_key=${import.meta.env.VITE_API_KEY}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};