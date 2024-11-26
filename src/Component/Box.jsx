import React from "react";

const Box = ({ children }) => {
  return (
    <div className="mx-auto mt-[2rem] md:mt-[0] p-6 bg-white rounded-lg shadow ">
      {children}
    </div>
  );
};

export default Box;