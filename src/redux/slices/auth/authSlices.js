import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction,verifyEmail, logoutAction, registerUserAction } from "../../actions/auth/authActions";



const initialState={
  user: "",
  registered: "",
  emailVerified:false,
  loading: false,
  appErr: null,
  serverErr: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
 
  reducers: {
    clearErrors: (state) => {
      state.appErr = null;
      state.serverErr = null;
    },
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.registered =false;
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = true;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.registered =false;
      state.appErr = action?.payload?.message || 'An error occurred';
      state.serverErr = action?.payload?.message || 'Network error';
    });

    // login
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.registered = "";
      state.user = action?.payload;
      state.loading = false;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });

    //verify-email
    builder.addCase(verifyEmail.pending, (state, action) => {
      state.registered =false;
      state.emailVerified = false;
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(verifyEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.emailVerified = true;
    });
    builder.addCase(verifyEmail.rejected, (state, action) => {
      state.loading = false;
      state.registered =false;
      state.emailVerified = false;
      state.appErr = action?.payload?.message || 'An error occurred';
      state.serverErr = action?.payload?.message || 'Network error';
    });

    // logoutAction
    builder.addCase(logoutAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.userAuth = undefined;
      state.loading = false;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
  },
});

export const { clearErrors } = authSlice.actions;
export default authSlice.reducer;