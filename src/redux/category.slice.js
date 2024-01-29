import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  initialState: {
    category: null,
    categories: [],
  },
  name: "category-slice",
  reducers: {
    loadCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { loadCategories, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
