import { createSlice } from '@reduxjs/toolkit';
import { findUserWithToken } from '../thunks';
import { TOKEN } from '@constants';

const initialState = {};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state = action.payload;
      return state;
    },
    logout: () => {
      localStorage.removeItem(TOKEN);
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findUserWithToken.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;

/*
  - cuando usuario login guardar token en cookie
  - cuando carga la pagina mirar si tengo la cookie
  - si si, hacer un getUser al backend con el token almacenado
    - guardar informacion (releveante) de respuesta en el initialState
  - y si no, no se hace llamado y se inicializa el estado con un usuario vacio
  - controlar error del backend si getUser falla
*/
