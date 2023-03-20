/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    postProduct: (state, action) => {
      state.push(action.payload);
      return state;
    },

    updateProduct: (state, action) => {
      const exist = state.find((e) => e.id === action.payload.id);
      if (exist) {
        const productListUpdated = state.map((e) =>
          e.id === action.payload.id
            ? {
                ...exist,
                quantity: (exist.quantity += action.payload.quantity),
              }
            : e
        );
        state = [...productListUpdated];
      }
    },

    checkoutUpdate: (state, action) => {
      const exist = state.find((e) => e.id === action.payload.id);
      console.log(exist.quantity);
      if (exist) {
        const productListUpdated = state.map((e) => {
          if (e.id === action.payload.id) {
            if (action.payload.isAdd) {
              console.log('hello');
              return {
                ...exist,
                quantity: (exist.quantity += 1),
              };
            } else {
              return {
                ...exist,
                quantity: (exist.quantity -= 1),
              };
            }
          } else {
            return e;
          }
        });
        state = [...productListUpdated];
      }
    },

    deleteProduct: (state, action) => {
      const exist = state.find((e) => e.id === action.payload.id);
      if (exist) {
        state = state.filter((e) => e.id !== action.payload.id);
        return state;
      }
    },

    emptyCart: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { postProduct, updateProduct, deleteProduct, checkoutUpdate, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
