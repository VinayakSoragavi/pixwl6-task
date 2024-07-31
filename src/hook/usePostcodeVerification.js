import { useState } from "react";
import axios from "axios";
import { verifyData } from "../utils/api";

const usePostcodeVerification = (setValue) => {
  const [loading, setLoading] = useState(false);

  const verifyPostcode = async (index, postcode) => {
    if (!postcode) return;

    setLoading(true);
    try {
      const response = await verifyData(process.env.POSTCODE_VALIDATION_URL, {
        postcode,
      });
      setValue(`addresses.${index}.city`, response.data.city[0].name);
      setValue(`addresses.${index}.state`, response.data.state[0].name);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    verifyPostcode,
  };
};

export default usePostcodeVerification;
