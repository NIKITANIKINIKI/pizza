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
      const newItem = state.items.find((el) => el.id == action.payload.id);
      if (newItem) {
        newItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += Number(action.payload.price);
    },
    subFromCart(state, action) {
      const newItem = state.items.find((el) => el.id == action.payload.id);
      if (newItem.count !== 0) {
        newItem.count -= 1;
        state.totalPrice -= Number(newItem.price);
      } else {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      }
    },
    removeToCart(state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload.id);
      state.totalPrice -=
        Number(action.payload.price) * Number(action.payload.count);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeToCart, clearCart, subFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
