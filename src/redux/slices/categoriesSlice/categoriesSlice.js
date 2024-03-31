import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategories } from "../../actions/categories/allCategoriesActions";

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
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.appErr = null;
        state.serverErr = null;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action.payload?.message || "An error occurred";
        state.serverErr = action.payload?.message || "Network error";
      });
  },
});

export const { clearErrors } = categoriesSlice.actions;
export default categoriesSlice.reducer;
