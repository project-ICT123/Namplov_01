import React from "react";

const Button = ({ children }) => {
  return (
    <div className="w-full bg-bgcolor text-white py-2 px-3 rounded-md hover:bg-white hover:border hover:text-black transition">
      {children}
    </div>
  );
};

export default Button;