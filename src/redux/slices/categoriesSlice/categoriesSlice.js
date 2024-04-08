import { createSlice } from "@reduxjs/toolkit";
import { fetchAllsubCategories, fetchAllFootrwearType } from "../../actions/categories/allCategoriesActions";

const initialState = {
  categoriesData: [],
  footwearTypeData: [],
  loading: false,
  appErr: null,
  serverErr: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllsubCategories.pending, (state) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(fetchAllsubCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesData = action.payload;
    });
    builder.addCase(fetchAllsubCategories.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });

    // footwear type slice
    builder.addCase(fetchAllFootrwearType.pending, (state) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(fetchAllFootrwearType.fulfilled, (state, action) => {
      state.loading = false;
      state.footwearTypeData = action.payload;
    });
    builder.addCase(fetchAllFootrwearType.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action.payload?.message || "An error occurred";
      state.serverErr = action.payload?.message || "Network error";
    });
  },
});

export const { clearErrors } = categoriesSlice.actions;
export default categoriesSlice.reducer;
