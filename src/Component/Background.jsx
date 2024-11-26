import React from "react";

const Background = ({ children }) => {
  return (
    <div className=" bg-white min-h-screen px-[1rem] sm:px:[2rem] md:px-[3rem] flex flex-col lg:flex-row md:items-center md:justify-center ">
      {children}
    </div>
  );
};

export default Background;