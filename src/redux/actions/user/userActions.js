import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";


export const fetchUserDetails = createAsyncThunk("user/fetchUserDetails", async (userEmail, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const res = await axios.get(`${baseUrl}/api/user?userEmail=${userEmail}`, config);
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  });