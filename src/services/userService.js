import axios from "axios";

export const loginUser = async (data) => {
  try {
    if (!data || !data.email || !data.password) {
      throw new Error("Email and password are required.");
    }

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/login`,
      data
    );

    return res.data;
  } catch (error) {
    if (error.response) {
      const errorMessage =
        error.response.data.message || "Login failed. Please try again.";
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
};
