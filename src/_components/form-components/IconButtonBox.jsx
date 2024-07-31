import React from "react";

function IconButtonBox({ title, fun, type, bgcolor, src }) {
  return (
    <button
      // Apply base styling and dynamic background color to the button
      className={`p-2 rounded-full`}
      type={type}
      // Only attach the click handler if the button type is "button"
      onClick={type === "button" ? fun : undefined}
      style={{ backgroundColor: bgcolor || "#7a5cfa" }}
      // Improve accessibility by providing an aria-label for screen readers
      aria-label={title}
    >
      {/* Render an image inside the button */}
      <img className="w-3" src={src} alt={title} />
    </button>
  );
}

export default IconButtonBox;
