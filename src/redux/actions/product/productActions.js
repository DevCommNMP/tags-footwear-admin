import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Fetch All products
export const fetchAllProductsAction = createAsyncThunk(
  "api/products",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("fetching data")
      const res = await axios.get(`${baseUrl}/api/products`, config);
      console.log("fetched data")
      return res.data;
    } catch (error) {
      if (!error?.response) {
        console.log(error.message)
        throw error;
     
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//  fetch particular product
// Fetch All products
export const fetchParticularProduct = createAsyncThunk(
    "api/products/id",
    async (id, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.get(`${baseUrl}/api/products/${id}`, config);
        console.log(res)
        return res.data;
      } catch (error) {
        if (!error?.response) {
          throw error;
        }
        return rejectWithValue(error?.response?.data);
      }
    }
  );
