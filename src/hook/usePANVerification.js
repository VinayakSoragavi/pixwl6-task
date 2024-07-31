import { useState } from "react";
import axios from "axios";
import { verifyData } from "../utils/api";

const usePANVerification = (setValue) => {
  const [loading, setLoading] = useState(false);

  const verifyPAN = async (pan) => {
    if (!pan) return;

    setLoading(true);
    try {
      const response = await verifyData(process.env.PAN_VALIDATION_URL, {
        panNumber: pan,
      });
      if (response.data.isValid) {
        setValue("fullName", response.data.fullName);
      } else {
        alert("Invalid PAN");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    verifyPAN,
  };
};

export default usePANVerification;
