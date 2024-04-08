import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchParticularProduct = createAsyncThunk("api/products/id", async (id, { rejectWithValue }) => {
  try {
    const localData = JSON.parse(localStorage.getItem("userData"));
    if (localData) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localData.token}`, // Include token in the request headers
        },
      };
      const res = await axios.get(`${baseUrl}/api/wishlist/${id}`, config);
      return res.data; // Return fetched data
    } else {
      throw new Error("You need to log in first"); // Throw an Error object
    }
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
