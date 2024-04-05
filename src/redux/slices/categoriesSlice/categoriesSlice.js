import { createSlice } from "@reduxjs/toolkit";
import { fetchAllsubCategories } from "../../actions/categories/allCategoriesActions";

const initialState = {
  categories: [],
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
    builder
      .addCase(fetchAllsubCategories.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(fetchAllsubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(fetchAllsubCategories.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });
  },
});

export const { clearErrors } = categoriesSlice.actions;
export default categoriesSlice.reducer;
