import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import settingsDark from "../assets/settings--dark.png";
import logoutDark from "../assets/logout--dark.png";
import profileDark from "../assets/profile--dark.png";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const DropDown = () => {
  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="shadow-lg rounded-lg py-4 px-4 absolute top-12 right-4 w-56 z-50 bg-white">
      <Link to={"/profile"} className="flex items-center">
        <img src={profileDark} alt="" className="mr-4 w-5" />
        <p className="text-sm">My Profile</p>
      </Link>
      <div className="flex items-center py-4">
        <img src={settingsDark} alt="" className="mr-4 w-5" />
        <p className="text-sm">Settings</p>
      </div>
      <div className="flex items-center border-t pt-2" onClick={signOutUser}>
        <img src={logoutDark} alt="" className="mr-4 w-5 cursor-pointer" />
        <p className="text-sm cursor-pointer">Logout</p>
      </div>
    </div>
  );
};

export default DropDown;
