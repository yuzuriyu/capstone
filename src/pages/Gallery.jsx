import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Subheader from "../components/Subheader";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <div className="flex">
      <div className="w-[300px] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <Subheader />
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
