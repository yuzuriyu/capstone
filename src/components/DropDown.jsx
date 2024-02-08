import React from "react";
import settingsDark from "../assets/settings--dark.png";
import logoutDark from "../assets/logout--dark.png";
import profileDark from "../assets/profile--dark.png";

const DropDown = () => {
  return (
    <div className="shadow-lg rounded-lg py-4 px-4 absolute top-12 right-4 w-56 z-50 bg-white">
      <div className="flex items-center">
        <img src={profileDark} alt="" className="mr-4 w-5" />
        <p className="text-sm">My Profile</p>
      </div>
      <div className="flex items-center py-4">
        <img src={settingsDark} alt="" className="mr-4 w-5" />
        <p className="text-sm">Settings</p>
      </div>
      <div className="flex items-center border-t pt-2">
        <img src={logoutDark} alt="" className="mr-4 w-5" />
        <p className="text-sm">Logout</p>
      </div>
    </div>
  );
};

export default DropDown;
