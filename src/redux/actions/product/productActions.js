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
//  update particular product Image

export const updateProductImage = createAsyncThunk(
  'api/products/image',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      // const formData = new FormData();
      // formData.append('image', imageData);

      console.log(id)
      console.log(formData)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const res = await axios.post(`${baseUrl}/api/products/${id}`, formData, config);
      console.log(res);
      return res.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);


export const updateProductSubImage = createAsyncThunk(
  'api/products/subImages',
  async ({ id, imageData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('image', imageData);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const res = await axios.put(`${baseUrl}/api/products/${id}/image`, formData, config);
      console.log(res);
      return res.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

//  fetch particular product
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
