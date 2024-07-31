import { useState } from "react";
import { verifyData } from "../utils/api";

const usePANVerification = (setValue) => {
  const [loading, setLoading] = useState(false);

  /**
   * Verifies the PAN number by making an API call.
   *
   * @param {string} pan - The PAN number to be verified.
   */
  const verifyPAN = async (pan) => {
    // Return early if no PAN is provided
    if (!pan) return;

    // Set loading state to true before starting the request
    setLoading(true);
    try {
      // Make API call to verify PAN number
      const response = await verifyData(process.env.PAN_VALIDATION_URL, {
        panNumber: pan,
      });

      // Check if PAN number is valid based on API response
      if (response.data.isValid) {
        // Set the fullName field if PAN is valid
        setValue("fullName", response.data.fullName);
      } else {
        // Alert user if PAN is not valid
        alert("Invalid PAN");
      }
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
    // Function to call for PAN verification
    verifyPAN,
  };
};

export default usePANVerification;
