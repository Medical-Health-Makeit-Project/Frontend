import axios from 'axios';
import { authAdapter } from '../adapters';

export const authService = async (URL, user) => {
  try {
    const { data } = await axios.post(URL, user);
    return authAdapter(data);
  } catch (error) {
    throw error;
  }
};
