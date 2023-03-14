// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
