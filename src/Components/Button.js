import React from "react";

const Button = ({ color, type, bgColor, text, size, br }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius: br,
        fontSize: size,
      }}
      className="p-3 hover:drop-shadow-xl"
    >
      {text}
    </button>
  );
};

export default Button;
