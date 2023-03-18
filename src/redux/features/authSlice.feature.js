import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { isAuthorized } from '@services/authorization';
import { AUTH } from '@constants';

const initialState = {};

export const findUserWithToken = createAsyncThunk(
  'authorization/findUserWithToken',
  async (token, { rejectWithValue }) => {
    try {
      const response = await isAuthorized(AUTH, token);
      if (response instanceof Error) throw response;
      return response;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state = action.payload;
      return state;
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findUserWithToken.rejected, (state, action) => {
      state = { error: action.payload };
      return state;
    });
  },
});

export const { setAuth, isError, logout } = authSlice.actions;
export default authSlice.reducer;

/*
  - cuando usuario login guardar token en cookie
  - cuando carga la pagina mirar si tengo la cookie
  - si si, hacer un getUser al backend con el token almacenado
    - guardar informacion (releveante) de respuesta en el initialState
  - y si no, no se hace llamado y se inicializa el estado con un usuario vacio
  - controlar error del backend si getUser falla
*/
