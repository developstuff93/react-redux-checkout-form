import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first: 2,
  second: 1,
  third: 0,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, { payload: item }) => ({
      ...state,
      [item]: (state[item] || 0) + 1,
    }),
    deleteItem: (state, { payload: item }) => ({
      ...state,
      [item]: Math.max((state[item] || 0) - 1, 0),
    }),
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
