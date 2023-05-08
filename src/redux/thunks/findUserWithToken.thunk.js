import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAuthorized } from '@services/authorization';
import { AUTHORIZATION } from '@constants';

export const findUserWithToken = createAsyncThunk(
  'authorization/findUserWithToken',
  async (token) => {
    try {
      const response = await isAuthorized(AUTHORIZATION, token);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
