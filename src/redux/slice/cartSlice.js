import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isItem = state.items.find((el) => el.id == action.payload.id);
      if (isItem) {
        isItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += Number(action.payload.price);
    },
    removeToCart(state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
