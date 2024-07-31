import axios from "axios";

export const verifyData = (url, value) => {
  return axios.post(url, value);
};
