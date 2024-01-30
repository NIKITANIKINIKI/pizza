import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaType: 0,
  activeObj: { id: 0, name: "популярности", sortEl: "rating" },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeType(state, action) {
      state.pizzaType = action.payload;
    },
    changeActive(state, action) {
      state.activeObj = action.payload;
    },
  },
});

export const { changeType, changeActive } = filterSlice.actions;

export default filterSlice.reducer;
