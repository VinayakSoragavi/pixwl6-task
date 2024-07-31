import React from "react";

function InputBox({ register, handlePANBlur, registerFormate, value }) {
  return (
    <input
      // Apply styles to the input field
      className="border-2 border-[#e8e8e8] bg-[#f6f6f6] p-2 rounded-md w-full"
      // Spread the registration props from react-hook-form
      {...register(registerFormate)}
      // Attach a blur event handler if provided
      onBlur={handlePANBlur}
      // Conditionally apply readOnly attribute
      readOnly={value.readOnly}
    />
  );
}

export default InputBox;
