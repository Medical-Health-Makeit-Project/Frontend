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
  if (token === '987654321' || token === '123456789' || token === '56789' || token === '123') {
    if (token === '987654321') {
      const {
        id,
        name,
        img_profile,
        area,
        email,
        phone,
        headquarter,
        gender,
        qualifications,
        introduction,
        memberships,
        skills,
        role,
      } = user.find((e) => e.username === 'Perry Barkley' && e);
      return {
        id,
        name,
        img_profile,
        area,
        email,
        phone,
        headquarter,
        gender,
        qualifications,
        introduction,
        memberships,
        skills,
        role,
      };
    } else if (token === '123456789') {
      const { username, avatar, role, email, phone, nationality, gender, birthday, blood } =
        user.find((e) => e.username === 'Ricardo Munera' && e);
      return {
        username,
        avatar,
        email,
        phone,
        nationality,
        gender,
        birthday,
        blood,
        role,
      };
    } else if (token === '56789') {
      const { username, avatar, role, email, phone, nationality, gender, birthday, blood } =
        user.find((e) => e.username === 'Robert Langdon' && e);
      return {
        username,
        avatar,
        email,
        phone,
        nationality,
        gender,
        birthday,
        blood,
        role,
      };
    } else if (token === '123') {
      const { username, avatar, role, email, phone, nationality, gender, birthday, blood } =
        user.find((e) => e.username === 'Jean Vittory' && e);
      return {
        username,
        avatar,
        email,
        phone,
        nationality,
        gender,
        birthday,
        blood,
        role,
      };
    } else {
      return new Error('Unauthorized');
    }
  }
};
