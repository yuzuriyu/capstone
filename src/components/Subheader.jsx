import React, { useState } from "react";
import search from "../assets/search--dark.png";
import bell from "../assets/bell--dark.png";
import DropDown from "./DropDown";

const Subheader = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropDownOpen((prevStatus) => !prevStatus);
  };
  return (
    <div className="relative">
      <div className="w-11/12 m-auto flex justify-between items-center my-4 md:w-10/12">
        <div className="flex items-center border rounded-lg px-4 py-2 w-[240px] overflow-hidden">
          <img src={search} alt="" className="w-4" />
          <input
            type="text"
            className="px-4 focus:outline-none flex-1"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <img src={bell} alt="" className="mr-4" />
          <div className="flex items-center" onClick={handleDropDown}>
            <img
              src={
                "https://i.pinimg.com/564x/8d/77/e8/8d77e8f9b2027e4bf276294908c5b574.jpg"
              }
              alt=""
              className="rounded-full w-10 md:mr-2"
            />
            <p className="hidden md:block font-bold">Carey Cole</p>
          </div>
        </div>
      </div>
      {isDropDownOpen && <DropDown />}
    </div>
  );
};

export default Subheader;
