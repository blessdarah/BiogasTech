import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: {
    cart: [],
  },
  name: "cart-slice",
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.productId != action.payload.productId,
      );
      console.log("cart: ", state.cart);
    },
    updateCartProduct: (state, action) => {
      const others = state.cart.filter(
        (item) => item.productId != action.payload.productId,
      );
      if (action.payload.qty == 0) {
        state.cart = [...others];
      } else {
        state.cart = [...others, action.payload];
      }
    },
    resetCart: () => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartProduct, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
