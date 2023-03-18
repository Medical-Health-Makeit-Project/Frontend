import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAuthorized } from '@services/authorization';
import { AUTH } from '@constants';

export const findUserWithToken = createAsyncThunk(
  'authorization/findUserWithToken',
  async (token) => {
    try {
      const response = await isAuthorized(AUTH, token);
      if (response instanceof Error) throw response;
      return response;
    } catch (error) {
      return error.message;
    }
  }
);
