import { createSlice } from "@reduxjs/toolkit";

const userIdToken = localStorage.getItem("idToken") || null;
console.log(userIdToken);

const initialState = { isLoggedIn: !!userIdToken, idToken: userIdToken };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    setLogIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setIdToken(state, action) {
      state.idToken = action.payload;
    },
    logOut(state) {
      state.idToken = "";
      state.isLoggedIn = false;
      localStorage.removeItem("idToken");
    },
  },
});

const authReducer = AuthSlice.reducer;

export default authReducer;

export const authActions = AuthSlice.actions;
