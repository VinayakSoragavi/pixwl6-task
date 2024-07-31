import axios from "axios";

/**
 * Sends a POST request to the specified URL with the given data.
 *
 * @param {string} url - The endpoint URL to which the request is sent.
 * @param {Object} value - The data to be sent in the request body.
 * @returns {Promise} - A promise that resolves to the response of the request.
 * @throws {Error} - Throws an error if the request fails or if the URL is invalid.
 */
export const verifyData = async (url, value) => {
  if (typeof url !== "string" || !url.trim()) {
    throw new Error("Invalid URL");
  }
  if (typeof value !== "object" || value === null) {
    throw new Error("Invalid data");
  }

  try {
    // Send a POST request with axios and return the response
    const response = await axios.post(url, value);
    return response;
  } catch (error) {
    // Log or handle the error as needed
    console.error("Error in verifyData:", error);
    throw new Error(`Request failed: ${error.message}`);
  }
};
