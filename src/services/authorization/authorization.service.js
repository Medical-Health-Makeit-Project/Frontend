import axios from 'axios';
import { authorizationAdapter } from './authorizationAdapter.service';

export const isAuthorized = async (URL, token) => {
  try {
    const response = await axios.post(URL, token);
    const isValid = userAuthorized(response.data, token);
    if (isValid instanceof Error) throw isValid;
    return authorizationAdapter(isValid);
  } catch (error) {
    return error;
  }
};

const userAuthorized = (user, token) => {
  console.log(token);
  if (token === '987654321') {
    const { username, avatar, role } = user[0];
    return {
      username: username,
      avatar: avatar,
      role: role,
    };
  } else {
    return new Error('Unauthorized');
  }
};
