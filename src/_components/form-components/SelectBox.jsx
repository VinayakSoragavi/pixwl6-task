import React from "react";
import { Controller } from "react-hook-form";
function SelectBox({ name, control, registerFormate, register }) {
  return (
    <Controller
      name={registerFormate}
      control={control}
      render={({ field }) => (
        <select
          className="border-2 border-[#e8e8e8] bg-[#f6f6f6] p-2 rounded-md w-full"
          {...field}
        >
          <option value="Karnataka">Karnataka</option>
          <option value="maharashtra">maharashtra</option>
        </select>
      )}
    />
  );
}

export default SelectBox;
