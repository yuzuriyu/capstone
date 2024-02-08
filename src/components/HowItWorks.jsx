import React from "react";

const HowItWorks = () => {
  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://images7.alphacoders.com/111/1111209.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair text-white">How It Works</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12 h-[450px]"></div>
    </>
  );
};

export default HowItWorks;
