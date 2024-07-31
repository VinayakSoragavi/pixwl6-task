import React, { useState } from "react";

function ButtonBox({ title, fun, type, bgcolor }) {
  const bgColorClass = bgcolor ? `bg-[${bgcolor}]` : "bg-[#7a5cfa]";
  return (
    <button
      className={`border-2  ${bgColorClass} py-2.5 px-4 rounded-md w-40 text-white`}
      type={type}
      onClick={type === "button" ? fun : null}
    >
      {title}
    </button>
  );
}

export default ButtonBox;
