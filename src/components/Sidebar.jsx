import React, { useContext } from "react";
import logo from "../assets/react.svg";
import overviewLight from "../assets/overview--light.png";
import { PageContext } from "../context/PageContext";
import aboutLight from "../assets/about--light.png";
import contactLight from "../assets/contact--light.png";
import galleryLight from "../assets/gallery--light.png";
import howLight from "../assets/how--light.png";
import detailsLight from "../assets/details--light.png";
import { Link } from "react-router-dom";
import wallpaper from "../assets/car-2.jpg";

const Sidebar = () => {
  const { handleActivePage, activePage } = useContext(PageContext);
  return (
    <div className=" h-full hidden md:block relative">
      <img
        src={wallpaper}
        alt="wallpaper"
        className="absolute h-full w-full -z-50 object-cover brightness-50"
      />
      <div className="w-10/12 m-auto py-4">
        <div className="flex items-center mb-4">
          <img src={logo} alt="" className="mr-4" />
          <p className="text-white">Volt React</p>
        </div>
        <Link
          to={"/"}
          className={`flex items-center py-4  px-4 mb-2  ${
            activePage === "Overview" ? "border-b" : ""
          }`}
          onClick={() => handleActivePage("Overview")}
        >
          <img src={overviewLight} alt="" className="mr-4 w-7" />
          <p className="text-white">Overview</p>
        </Link>
        <Link
          to={"/about"}
          className={`flex items-center py-4  px-4 ${
            activePage === "About" ? "border-b" : ""
          }`}
          onClick={() => handleActivePage("About")}
        >
          <img src={aboutLight} alt="" className="mr-4 w-7" />
          <p className="text-white">About Us</p>
        </Link>
        <Link
          to={"/contact"}
          className={`flex items-center py-4  px-4 ${
            activePage === "Contact" ? "border-b" : ""
          }`}
          onClick={() => handleActivePage("Contact")}
        >
          <img src={contactLight} alt="" className="mr-4 w-7" />
          <p className="text-white">Contact</p>
        </Link>
        <Link
          to={"/project-details"}
          className={`flex items-center py-4  px-4 ${
            activePage === "Details" ? "border-b" : ""
          }`}
          onClick={() => handleActivePage("Details")}
        >
          <img src={detailsLight} alt="" className="mr-4 w-7" />
          <p className="text-white">Project Details</p>
        </Link>

        <Link
          to={"/how-it-works"}
          className={`flex items-center py-4  px-4 ${
            activePage === "How it Works" ? "border-b" : ""
          }`}
          onClick={() => handleActivePage("How it Works")}
        >
          <img src={howLight} alt="" className="mr-4 w-7" />
          <p className="text-white">How it Works</p>
        </Link>
        <Link
          to={"/gallery"}
          className={`flex items-center py-4  px-4 ${
            activePage === "Gallery" ? "border-b" : ""
          }`}
          onClick={() => handleActivePage("Gallery")}
        >
          <img src={galleryLight} alt="" className="mr-4 w-7" />
          <p className="text-white">Gallery</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
