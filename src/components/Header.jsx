import React from "react";
import logo from "../assets/react.svg";
import menu from "../assets/menu--light.png";

const Header = () => {
  return (
    <div className="w-full bg-darkblue py-4 md:hidden">
      <div className="flex justify-between w-11/12 m-auto md:w-10/12">
        <img src={logo} alt="" />
        <img src={menu} alt="" className="w-7" />
      </div>
    </div>
  );
};

export default Header;
