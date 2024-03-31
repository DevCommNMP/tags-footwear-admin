import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchAllCategories = createAsyncThunk(
  "products/categories",
  async (_, { rejectWithValue, getState }) => {
    try {
      // Check if the user is authenticated
    //   const localData = localStorage.getItem("userData"); // Assuming "auth" is the key where you store authentication data
     
      
      // User is authenticated, proceed with fetching categories from the server
    //   const { token } = JSON.parse(localData); // Assuming token is stored in the "auth" data
      const config = {
        headers: {
        //   Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      // Send request to server to fetch categories
      const res = await axios.get(`${baseUrl}/api/subCategories`, config); // Using baseUrl from imported module
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
