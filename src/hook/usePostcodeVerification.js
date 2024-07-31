import { useState } from "react";
import { verifyData } from "../utils/api";

const usePostcodeVerification = (setValue) => {
  const [loading, setLoading] = useState(false);

  /**
   * Verifies the postcode by making an API call.
   *
   * @param {number} index - The index of the address in the array.
   * @param {string} postcode - The postcode to be verified.
   */
  const verifyPostcode = async (index, postcode) => {
    // Return early if no postcode is provided
    if (!postcode) return;

    // Set loading state to true before starting the request
    setLoading(true);
    try {
      // Make API call to verify postcode
      const response = await verifyData(
        "https://lab.pixel6.co/api/get-postcode-details.php",
        {
          postcode,
        }
      );

      // Update form fields with city and state information from the API response
      setValue(`addresses.${index}.city`, response.data.city[0].name);
      setValue(`addresses.${index}.state`, response.data.state[0].name);
    } catch (error) {
      // Log any errors that occur during the API call
      console.error(error);
    } finally {
      // Reset loading state regardless of the outcome
      setLoading(false);
    }
  };

  return {
    // Indicates if the verification process is in progress
    loading,
    // Function to call for postcode verification
    verifyPostcode,
  };
};

export default usePostcodeVerification;
