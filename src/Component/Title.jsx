import React from "react";

const Title = ({ children, className = "" }) => {
  return (
    <h1 className={`text-4xl font-bold text-black flex justify-center item-center mt-[5rem] md:mt-[0rem] ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
