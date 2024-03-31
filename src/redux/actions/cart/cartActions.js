import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

// Function to add a product to the cart in local storage
const addToCart = (product) => {
  // Get existing cart items from local storage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  // Check if the product is already in the cart
  const existingProductIndex = cartItems.findIndex((item) => item.productId === product.productId);

  if (existingProductIndex !== -1) {
    // If the product is already in the cart, increase its quantity
    cartItems[existingProductIndex].quantity += 1;
  } else {
    // If the product is not in the cart, add it as a new item
    cartItems.push({ productId: product._id, quantity: 1,productImage:product.productImage,price:product.SellingPrice,title:product.title});
  }

  // Save the updated cart items back to local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Return the updated cart items
  console.log(cartItems)
  return cartItems;
};

// Register action
export const addToCartHandler = createAsyncThunk("products/addtocart", async (data, { rejectWithValue }) => {
  try {
    // Check if the user is authenticated
    const localData = localStorage.getItem("userData");
    if (localData) {
      // User is authenticated, proceed with adding item to cart on server
      const productId = data._id;
      const token = JSON.parse(localData).token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      // Send request to server to add item to cart
    //   const res = await axios.post(`${baseUrl}/api/cart`, { productId }, config);
    //   return res.data;
    addToCart(data);
    return JSON.parse(localStorage.getItem("cartItems"))
    } else {
      // User is not authenticated, add item to cart in local storage only
      addToCart(data);
     return JSON.parse(localStorage.getItem("cartItems"))
    }
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});
