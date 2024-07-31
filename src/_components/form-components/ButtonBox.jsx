import React from "react";

function ButtonBox({ title, fun, type, bgcolor }) {
  return (
    <button
      // Apply dynamic classes to the button
      className={`border-2  py-2.5 px-4 rounded-md w-40 text-white`}
      // Set the button type (e.g., "button", "submit")
      type={type}
      // Only attach the click handler if the type is "button"
      onClick={type === "button" ? fun : null}
      style={{ backgroundColor: bgcolor || "#7a5cfa" }}
    >
      {title}
    </button>
  );
}

export default ButtonBox;
