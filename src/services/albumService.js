import axios from "axios";
import { handleAxiosError } from "../utils/validationErr";

const albumService = {
  getAllAlbum: async ({ keyword, page, pageSize, orderBy, orderDirection }) => {
    try {
      const params = {
        keyword: keyword || "",
        page: page || 1,
        pageSize: pageSize || 15,
        orderBy: orderBy || "createdAt",
        orderDirection: orderDirection || "desc",
      };

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/album/getAllAlbum`,
        {
          params: params,
        }
      );

      return res.data;
    } catch (error) {
      handleAxiosError(error);
      throw new Error("Failed to fetch albums: " + error.message);
    }
  },

  detailedAlbum: async (albumId) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/album/detailedAlbum/${albumId}`
      );

      return res.data;
    } catch (error) {
      handleAxiosError(error);
      throw new Error("Failed to fetch album details: " + error.message);
    }
  },
};

export default albumService;
