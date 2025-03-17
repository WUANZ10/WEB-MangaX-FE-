import axios from "axios";
import {
  handleAxiosError,
  validateRequiredFields,
} from "../utils/validationErr";

const userService = {
  registerUser: async (data) => {
    try {
      validateRequiredFields(data, ["email", "password", "username"]);

      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/register`,
        {
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          username: data.username,
        }
      );

      return res.data;
    } catch (error) {
      handleAxiosError(error);
    }
  },

  loginUser: async (data) => {
    try {
      validateRequiredFields(data, ["email", "password"]);

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        data
      );

      if (res.data.data.userId) {
        localStorage.setItem("userId", res.data.data.userId);
      }

      return res.data;
    } catch (error) {
      handleAxiosError(error);
    }
  },
};

export default userService;
