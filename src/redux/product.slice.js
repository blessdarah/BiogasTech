import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  initialState: {
    product: null,
    products: [],
  },
  name: "product-slice",
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { loadProducts, setProduct } = productSlice.actions;

export default productSlice.reducer;
