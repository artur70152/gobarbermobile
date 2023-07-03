import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;