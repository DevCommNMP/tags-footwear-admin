import { createSlice } from "@reduxjs/toolkit";
import { addToCartHandler } from "../../actions/cart/cartActions";



const initialState={
cart:[],
  cartLoading: false,
  appErr: null,
  serverErr: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
 
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    // Add to cart
    builder.addCase(addToCartHandler.pending, (state, action) => {
      state.cartLoading = true;
      state.addedtocart=false,
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(addToCartHandler.fulfilled, (state, action) => {
      state.cartLoading = false;
      state.addedtocart=false,
      state.cart = action?.payload;
    });
    builder.addCase(addToCartHandler.rejected, (state, action) => {
      state.cartLoading = false;
      state.appErr = action?.payload?.message || 'An error occurred';
      state.serverErr = action?.payload?.message || 'Network error';
    });

   
  },
});

export const { clearErrors } = cartSlice.actions;
export default cartSlice.reducer;