import React, { useContext, useState } from "react";
import bell from "../assets/bell--dark.png";
import DropDown from "./DropDown";
import { auth } from "../config/firebase";

const Subheader = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropDownOpen((prevStatus) => !prevStatus);
  };
  console.log(auth.currentUser);
  return (
    <div className="relative">
      <div className="w-11/12 m-auto flex justify-end items-center my-4 md:w-10/12">
        <div className="flex items-center">
          {/* <img src={bell} alt="" className="mr-4" /> */}
          <div className="flex items-center" onClick={handleDropDown}>
            <img
              src={auth.currentUser.photoURL}
              alt=""
              className="rounded-full w-10 md:mr-2"
            />
            <p className="hidden md:block font-bold">
              {auth.currentUser.displayName}
            </p>
          </div>
        </div>
      </div>
      {isDropDownOpen && <DropDown />}
    </div>
  );
};

export default Subheader;
