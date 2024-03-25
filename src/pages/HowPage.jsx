import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HowItWorks from "../components/HowItWorks";

const HowPage = () => {
  return (
    <div className="flex">
      <div className="w-[300px] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <HowItWorks />
      </div>
    </div>
  );
};

export default HowPage;
