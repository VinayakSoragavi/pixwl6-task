import React from "react";
import { Controller } from "react-hook-form";
function SelectBox({ name, control, registerFormate, register }) {
  return (
    <Controller
      // Name of the field to be controlled
      name={registerFormate}
      // React Hook Form control object
      control={control}
      render={({ field }) => (
        // Spread the field properties from Controller
        <select
          className="border-2 border-[#e8e8e8] bg-[#f6f6f6] p-2 rounded-md w-full"
          {...field}
        >
          {/* Options for the select box */}
          <option value="">Select State</option>
          <option value="Karnataka">Karnataka</option>
          <option value="maharashtra">maharashtra</option>
        </select>
      )}
    />
  );
}

export default SelectBox;
