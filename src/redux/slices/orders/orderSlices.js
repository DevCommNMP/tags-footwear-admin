import { createSlice } from "@reduxjs/toolkit";
import { fetchAllOrdersAction, fetchOrder, fetchOrderDetails } from "../../actions/orders/ordersActions";
import { fetchUserDetails } from "../../actions/user/userActions";

const initialState = {
  userdata: [],
  orderdata:[],
  orderDetails:[],
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
    
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.userdata = action.payload;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });

    builder.addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      });
      builder.addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orderdata = action.payload;
      });
      builder.addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });

      builder.addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      });
      builder.addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
      });
      builder.addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });

  

  },
});

export const { clearErrors } = orderslice.actions;
export default orderslice.reducer;
