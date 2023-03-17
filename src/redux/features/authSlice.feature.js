import { createSlice } from '@reduxjs/toolkit';
import { isAuthorized } from '@services/authorization';
import { AUTH } from '@constants';

// export const persistLocalStorageToken = (token) => {
//   localStorage.setItem('token', JSON.stringify(token));
// };

const initialState = {};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      // persistLocalStorageToken(action.payload.ACCESS_TOKEN);
      // return { token: action.payload.ACCESS_TOKEN };
      state = action.payload;
      return state;
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const findUserWithToken = (token) => {
  return (dispatch) => {
    try {
      isAuthorized(AUTH, token).then((response) => dispatch(setAuth(response)));
    } catch (error) {
      console.log(res);
    }
  };
};

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;

/*
  - cuando usuario login guardar token en cookie
  - cuando carga la pagina mirar si tengo la cookie
  - si si, hacer un getUser al backend con el token almacenado
    - guardar informacion (releveante) de respuesta en el initialState
  - y si no, no se hace llamado y se inicializa el estado con un usuario vacio
  - controlar error del backend si getUser falla
*/
