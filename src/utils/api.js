import axios from "axios";

/**
 * Sends a POST request to the specified URL with the given data.
 *
 * @param {string} url - The endpoint URL to which the request is sent.
 * @param {Object} value - The data to be sent in the request body.
 * @returns {Promise} - A promise that resolves to the response of the request.
 */
export const verifyData = (url, value) => {
  // Send a POST request with axios and return the promise
  return axios.post(url, value);
};
