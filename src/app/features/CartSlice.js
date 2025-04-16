import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    incrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id == payload);
      item.amount += 1;
    },
    decrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id == payload);
      item.amount -= 1;
    },
    clearCart: () => {},
    deleteCart: () => {},
  },
});

export const {
  addToCart,
  incrementAmount,
  decrementAmount,
  clearCart,
  deleteCart,
} = cartSlice.actions;
export default cartSlice.reducer;
