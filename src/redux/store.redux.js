// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features';
import {authReducer} from "./features"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
});
