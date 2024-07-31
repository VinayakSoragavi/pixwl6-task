import React, { useState } from "react";

function HeadLine({ title, color }) {
  return (
    // Heading element with conditional color styling
    <h1 style={{ color: color ? color : "black" }} className={`pb-2 pt-7`}>
      {title}
    </h1>
  );
}

export default HeadLine;
