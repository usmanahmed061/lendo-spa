import React from "react";

const Button = ({ className, text }) => {
  return (
    <button className={`btn rounded-5 px-3 py-1 me-1 ${className}`}>{text}</button>
  );
};

export default Button;
