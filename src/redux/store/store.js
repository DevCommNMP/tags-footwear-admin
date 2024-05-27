import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/authSlices";
import cartReducer from "../slices/cart/cartSlice";
import productReducer from "../slices/product/productsSlice";
import categoriesRedcer from "../slices/categoriesSlice/categoriesSlice";
import orderSlices from "../slices/orders/orderSlices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
    categories: categoriesRedcer,
    orders:orderSlices
  },
});

export default store;
