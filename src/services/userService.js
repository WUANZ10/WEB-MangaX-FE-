import axios from "axios";

const handleAxiosError = (error) => {
  if (error.response) {
    const errorMessage =
      error.response.data.message || "Request failed. Please try again.";
    throw new Error(errorMessage);
  } else if (error.request) {
    throw new Error("Unable to connect to the server. Please try again later.");
  } else {
    throw new Error("An error occurred. Please try again.");
  }
};

const validateRequiredFields = (data, fields) => {
  for (const field of fields) {
    if (!data[field]) {
      throw new Error(`${field} is required.`);
    }
  }
};

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
      return res.data;
    } catch (error) {
      handleAxiosError(error);
    }
  },
};

export default userService;
