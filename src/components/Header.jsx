import React, { useState } from "react";
import logo from "../assets/react.svg";
import menu from "../assets/menu--light.png";
import ToggleMenu from "./ToggleMenu";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isToggleMenuOpen, setIsToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenu((prevStatus) => !prevStatus);
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full bg-matteblack py-4 md:hidden">
      <div className="flex justify-between w-11/12 m-auto md:w-10/12">
        <img src={logo} alt="" />
        <img src={menu} alt="" className="w-6" onClick={handleToggleMenu} />
      </div>
      {isToggleMenuOpen && <ToggleMenu />}
    </div>
  );
};

export default Header;
