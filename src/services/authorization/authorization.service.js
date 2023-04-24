import axios from 'axios';
import { authorizationAdapter } from './authorizationAdapter.service';

export const isAuthorized = async (URL, token) => {
  try {
    const { data } = await axios.post(
      URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return authorizationAdapter(data);
  } catch (error) {
    throw error;
  }
};
