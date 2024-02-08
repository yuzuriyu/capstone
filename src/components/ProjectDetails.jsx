import React from "react";

const ProjectDetails = () => {
  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair ">Project</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12 h-[450px]"></div>
    </>
  );
};

export default ProjectDetails;
