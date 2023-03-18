import axios from 'axios';
import { authAdapter } from '../adapters';

export const authService = async (URL, user) => {
  try {
    const response = await axios.post(URL, user);
    const isValid = validateUser(user, response.data);
    if (isValid instanceof Error) throw isValid;
    return authAdapter(isValid);
  } catch (error) {
    throw error;
  }
};

const validateUser = (userToValidate, user) => {
  const userExist = user.find(
    (user) => user.username === userToValidate.username
  );
  if (!userExist) return new Error('Invalid credentials');
  if (userExist.password !== userToValidate.password)
    return new Error('Invalid credentials');
  return {
    ACCESS_TOKEN: 987654321,
  };
};
