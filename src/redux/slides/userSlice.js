import { createSlice } from "@reduxjs/toolkit";

const savedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

const initialState = {
  name: savedUserInfo.name || "",
  email: savedUserInfo.email || "",
  access_token: savedUserInfo.access_token || "",
  isLoggedIn: !!savedUserInfo.access_token,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      const { name, email, access_token } = payload;
      state.name = name;
      state.email = email;
      state.access_token = access_token;
      state.isLoggedIn = true;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name, email, access_token })
      );
    },

    logoutUser: (state) => {
      Object.assign(state, {
        name: "",
        email: "",
        access_token: "",
        isLoggedIn: false,
      });

      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
    },
  },
});

export const { updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
