import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div className="flex">
      <div className="w-[300px] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
