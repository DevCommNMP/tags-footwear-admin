import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";


// Register action
export const registerUserAction = createAsyncThunk(
  "user/register",

  async (user, { rejectWithValue }) => {

    // if()
    try { 
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${baseUrl}/api/auth/register`, user, config);
      return res.data;
    } catch (error) {
      
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Login action
export const loginUserAction = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(userData)
    try {
      const res = await axios.post(`${baseUrl}/api/auth/login`, userData, config,{
        withCredentilas:true,
      });
      // Save response to local storage

      localStorage.setItem('userData', JSON.stringify(res.data));
     const authToken = Cookies.get('token');

      console.log(authToken)
      // console.log(res.data)
      // console.log(res)
      return res.data;  
      
    } catch (error) {
     
      console.error(error);
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const verifyEmail = createAsyncThunk(
  "user/verifyemail",
  async (token, { rejectWithValue }) => {
    console.log(token); // Log the token for debugging purposes

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      // Since you're sending a POST request, you should include some data in the request body.
      // I'll assume an empty object '{}' for now. You can adjust this according to your API requirements.
      const res = await axios.post(`${baseUrl}/api/verify-account`, {}, config);
      return res.data;
    } catch (error) {
      // If there's no response, rethrow the error
      if (!error.response) {
        throw error;
      }

      // If there's a response, reject with the response data
      return rejectWithValue(error.response.data);
    }
  }
);

// Logout action
export const logoutAction = createAsyncThunk(
  '/logout',
  async (payload, { rejectWithValue }) => {
    try {
      // Additional logic or API calls can be added here if needed
      await localStorage.removeItem("userData");
    } catch (error) {
      console.error(error);
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);