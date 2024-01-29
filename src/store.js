import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import productSlice from "./redux/product.slice";
import authSlice from "./redux/auth.slice";
import categorySlice from "./redux/category.slice";
import cartSlice from "./redux/cart.slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  productState: productSlice,
  categoryState: categorySlice,
  cartState: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
