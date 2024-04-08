import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsAction,fetchParticularProduct,updateProductSubImage ,updateProductImage,deleteParticularProductAction } from "../../actions/product/productActions";

const initialState = {
  products: [],
  particularproduct: {},
  productImage: "",
  productSubImages: "",
  productsLoading: false,
  profilePhotoLoading: false,
  subImagesLoading: false,
  appErr: null,
  serverErr: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    //fetching all datas
    builder.addCase(fetchAllProductsAction.pending, (state) => {
      state.productsLoading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(fetchAllProductsAction.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAllProductsAction.rejected, (state, action) => {
      state.productsLoading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });

    //update productImage
    builder.addCase(updateProductImage.pending, (state) => {
      state.profilePhotoLoading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(updateProductImage.fulfilled, (state, action) => {
      state.profilePhotoLoading = false;
      state.productImage = action.payload;
    });
    builder.addCase(updateProductImage.rejected, (state, action) => {
      state.profilePhotoLoading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });

    //update productSubImage
    builder.addCase(updateProductSubImage.pending, (state) => {
      state.subImagesLoading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(updateProductSubImage.fulfilled, (state, action) => {
      state.subImagesLoading = false;
      state.productSubImages = action.payload;
    });
    builder.addCase(updateProductSubImage.rejected, (state, action) => {
      state.subImagesLoading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });

    //fetching perticular data
    builder.addCase(fetchParticularProduct.pending, (state) => {
        state.productsLoading = true;
        state.appErr = null;
        state.serverErr = null;
      });
      builder.addCase(fetchParticularProduct.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.particularproduct = action.payload;
      });
      builder.addCase(fetchParticularProduct.rejected, (state, action) => {
        state.productsLoading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });

      //delete particularproduct
      builder.addCase(deleteParticularProductAction.pending, (state) => {
        state.productsLoading = true;
        state.appErr = null;
        state.serverErr = null;
      });
      builder.addCase(deleteParticularProductAction.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.particularproduct = action.payload;
      });
      builder.addCase(deleteParticularProductAction.rejected, (state, action) => {
        state.productsLoading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });

  },
});

export const { clearErrors } = productSlice.actions;
export default productSlice.reducer;
