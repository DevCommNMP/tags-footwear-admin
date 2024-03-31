import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth/authSlices';
import cartReducer from "../slices/cart/cartSlice";
import productReducer from "../slices/product/productsSlice";
import categoriesRedcer from '../slices/categoriesSlice/categoriesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
    categories:categoriesRedcer,
  },
});

export default store;
