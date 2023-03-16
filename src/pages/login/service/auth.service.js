import axios from 'axios';
import { authAdapater } from '../adapters';

export const authService = async (URL, user) => {
  try {
    const response = await axios.post(URL, user);
    return authAdapater(validateUser(user, response.data));
  } catch (error) {
    return error;
  }
};

const validateUser = (userToValidate, user) => {
  const userExist = user.find(
    (user) => user.username === userToValidate.username
  );
  console.log(userExist);
  if (!userExist) return new Error('Invalid credentials');
  if (userExist.password !== userToValidate.password)
    return new Error('Invalid credentials');
  return '987654321';
};
