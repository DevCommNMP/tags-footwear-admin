import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import ProductMainImage from "../../../components/ProductMainImage";

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
//create product

export const createProduct = createAsyncThunk(
  "api/products",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("fetching data")
      const res = await axios.post(`${baseUrl}/api/products`,data, config);
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
  async ({ id, image }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
        formData.append("id", id); // Append key-value pair for id
        formData.append("productImage",image); // Append key-value pair for image
  
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ', ' + (pair[1] instanceof File ? pair[1].name : pair[1]));
      // }
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
  async ({ id, image }, { rejectWithValue }) => {
    // console.log(id,image)
    try {
     
      const formData = new FormData();
      formData.append("id", id); // Append key-value pair for id
      
      // Append each file with a unique key
      image.forEach((file, index) => {
        formData.append("productSubImages", file);
      });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
console.log(image)
      const res = await axios.post(`${baseUrl}/api/products/subImages/${id}`, formData, config);
      console.log(res);
      return res.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      
      }
      console.log(error)
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

  //delete particular product
  export const deleteParticularProductAction = createAsyncThunk(
    "api/products/delete/id",
    async (id, { rejectWithValue }) => {
      try {
        const config = {
          headers: {  
            "Content-Type": "application/json",
          },
        };
        const res = await axios.delete(`${baseUrl}/api/products/${id}`, config);
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
