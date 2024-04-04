import axios from "axios";

const API_KEY = "ulE6avVFmLJS1beFjS9uuf9KbMsD4TicAZEqjq7hZ2I";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: API_KEY,
  per_page: 12,
  orientation: "landscape",
};

export const fetchImgs = async (params = {}) => {
  const { data } = await axios.get("/search/photos", {
    params,
  });
  return data;
};
