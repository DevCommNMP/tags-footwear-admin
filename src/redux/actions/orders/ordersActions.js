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
      const res = await axios.get(`${baseUrl}/api/orders`, config);
      console.log(res);
      return res.data;
    } catch (error) {
      if (!error?.response) {
        console.log(error.message);
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  });