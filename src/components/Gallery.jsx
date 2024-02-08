import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://wallpapercave.com/wp/wp10497197.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair text-white">Gallery</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12 h-[450px]"></div>
    </>
  );
};

export default Gallery;
