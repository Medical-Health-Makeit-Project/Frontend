import axios from 'axios';
import { userAdapter } from '../adapters/user.adapter';

export const userService = async () => {
  try {
    const response = await axios.get('/src/pages/user-profile/user.json');
    const data = userAdapter(response.data);
    return data;
  } catch (error) {
    return error;
  }
};
