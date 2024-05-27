import { createSlice } from "@reduxjs/toolkit";
import { fetchAllOrdersAction } from "../../actions/orders/ordersActions";

const initialState = {
  orders: [],
  appErr: null,
  serverErr: null,
};

const orderslice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    //fetching all datas
    builder.addCase(fetchAllOrdersAction.pending, (state) => {
      state.ordersLoading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(fetchAllOrdersAction.fulfilled, (state, action) => {
      state.ordersLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchAllOrdersAction.rejected, (state, action) => {
      state.ordersLoading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });
  },
});

export const { clearErrors } = orderslice.actions;
export default orderslice.reducer;
