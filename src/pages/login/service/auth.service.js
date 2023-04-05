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
  const userExist = user.find((user) => user.username === userToValidate.username);
  if (!userExist) return new Error('Invalid credentials');
  if (userExist.password !== userToValidate.password) return new Error('Invalid credentials');
  if (userExist.username === 'Ricardo Munera') {
    return {
      ACCESS_TOKEN: '123456789',
    };
  } else if (userExist.username === 'Robert Langdon') {
    return {
      ACCESS_TOKEN: '56789',
    };
  } else if (userExist.username === 'Perry Barkley') {
    return {
      ACCESS_TOKEN: '987654321',
    };
  } else if (userExist.username === 'Jean Vittory') {
    return {
      ACCESS_TOKEN: '123',
    };
  } else {
    return {
      ACCESS_TOKEN: '9876543210',
    };
  }
};
