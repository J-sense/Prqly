import React from "react";

const Button = ({
  label,
  onClick,
  width = "auto",
  height = "40px",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      style={{ width: width, height: height }}
      className={`bg-secondary text-white px-3 rounded-lg hover:bg-opacity-80 transition-all ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
