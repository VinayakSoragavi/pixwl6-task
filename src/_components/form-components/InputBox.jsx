import React from "react";

function InputBox({ register, handlePANBlur, registerFormate }) {
  return (
    <input
      className="border-2 border-[#e8e8e8] bg-[#f6f6f6] p-2 rounded-md w-full"
      {...register(registerFormate)}
      onBlur={handlePANBlur}
    />
  );
}

export default InputBox;
