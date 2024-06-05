import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

 export const fetchAllOrdersAction = createAsyncThunk("api/orders", async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    //   console.log("fetching data");
      const res = await axios.get(`${baseUrl}/api/orders/getAllorders`, config);
    
      return res.data;
    } catch (error) {
      if (!error?.response) {
        console.log(error.message);
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  });
  
export const fetchOrder = createAsyncThunk("order/fetchOrder", async (orderId, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(`${baseUrl}/api/orders/${orderId}`, config);
    console.log(orderId)
    console.log(res.data)
    return res.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export const fetchOrderDetails = createAsyncThunk("order/fetchOrderDetails", async (orderId, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(`${baseUrl}/api/orderDetails/${orderId}`, config);
   
    return res.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
