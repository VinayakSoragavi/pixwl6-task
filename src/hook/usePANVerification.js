import { useState } from "react";
import axios from "axios";

/**
 * Custom hook to verify PAN number.
 *
 * @param {Function} setValue - Function to update form values.
 * @returns {Object} - Returns an object containing the loading state and verifyPAN function.
 */
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
      const response = await axios.post(
        process.env.REACT_APP_PAN_VALIDATION_URL,
        {
          panNumber: pan,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Check if the API call was successful
      if (response.data.isValid) {
        // Update the fullName field if PAN is valid
        setValue("fullName", response.data.fullName);
      } else {
        // Handle invalid PAN scenario
        alert("Invalid PAN");
        setValue("fullName", ""); // Clear fullName field if PAN is invalid
      }
    } catch (error) {
      // Log and handle errors
      console.error("Error verifying PAN:", error);
      alert("An error occurred while verifying PAN.");
    } finally {
      // Reset loading state regardless of the outcome
      setLoading(false);
    }
  };

  return {
    loading,
    verifyPAN,
  };
};

export default usePANVerification;
