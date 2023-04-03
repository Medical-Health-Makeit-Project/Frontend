/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  appointments: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    postProduct: (state, action) => {
      state.products.push(action.payload);
      return state;
    },

    postAppointment: (state, action) => {
      state.appointments.push(action.payload);
      return state;
    },

    updateProduct: (state, action) => {
      const exist = state.products.find((e) => e.id === action.payload.id);
      if (exist) {
        const productListUpdated = state.products.map((e) =>
          e.id === action.payload.id
            ? {
                ...exist,
                quantity: (exist.quantity += action.payload.quantity),
              }
            : e
        );
        state.products = [...productListUpdated];
      }
    },

    checkoutUpdate: (state, action) => {
      const exist = state.products.find((e) => e.id === action.payload.id);
      if (exist) {
        const productListUpdated = state.products.map((e) => {
          if (e.id === action.payload.id) {
            if (action.payload.isAdd) {
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
        state.products = [...productListUpdated];
      }
    },

    deleteProduct: (state, action) => {
      const exist = state.products.find((e) => e.id === action.payload.id);
      if (exist) {
        state.products = state.products.filter((e) => e.id !== action.payload.id);
        return state;
      }
    },

    deleteAppointment: (state, action) => {
      const exist = state.appointments.find((e) => e.id === action.payload);
      if (exist) {
        console.log(exist);
        state.appointments = state.appointments.filter((e) => e.id !== action.payload);

        return state;
      }
    },

    emptyCart: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const {
  postProduct,
  postAppointment,
  updateProduct,
  deleteProduct,
  deleteAppointment,
  checkoutUpdate,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
