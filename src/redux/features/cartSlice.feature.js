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

    deleteProduct: (state, action) => {
      const exist = state.find((e) => e.id === action.payload);
      if (exist) {
        const productListFiltered = state.filter(
          (e) => e.id !== action.payload
        );
        state = [...productListFiltered];
      }
    },
  },
});

export const { postProduct, updateProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
