export const handleAxiosError = (error) => {
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

export const validateRequiredFields = (data, fields) => {
  for (const field of fields) {
    if (!data[field]) {
      throw new Error(`${field} is required.`);
    }
  }
};
