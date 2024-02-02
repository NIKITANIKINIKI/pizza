import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaType: 0,
  activeObj: { id: 0, name: "популярности", sortEl: "rating" },
  currentPage: 1,
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
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.pizzaType = Number(action.payload.pizzaType);
      state.activeObj = action.payload.activeObj;
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const { changeType, changeActive, changeCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
