import React, { useState } from "react";
import logo from "../assets/react.svg";
import menu from "../assets/menu--light.png";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  const [isToggleMenuOpen, setIsToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenu((prevStatus) => !prevStatus);
  };
  return (
    <div className="w-full bg-darkblue py-4 md:hidden">
      <div className="flex justify-between w-11/12 m-auto md:w-10/12">
        <img src={logo} alt="" />
        <img src={menu} alt="" className="w-6" onClick={handleToggleMenu} />
      </div>
      {isToggleMenuOpen && <ToggleMenu />}
    </div>
  );
};

export default Header;
