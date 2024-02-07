import React from "react";
import search from "../assets/search--dark.png";
import bell from "../assets/icons/bell.png";

const Subheader = () => {
  return (
    <div>
      <div className="w-11/12 m-auto flex justify-between items-center my-4">
        <div className="flex items-center border rounded-lg px-4 py-2 w-[150px] overflow-hidden">
          <img src={search} alt="" className="w-4" />
          <input
            type="text"
            className="px-4 focus:outline-none flex-1"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <img src={bell} alt="" className="mr-2" />
          <img
            src={
              "https://i.pinimg.com/564x/8d/77/e8/8d77e8f9b2027e4bf276294908c5b574.jpg"
            }
            alt=""
            className="rounded-full w-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Subheader;
