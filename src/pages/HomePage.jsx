import React from "react";
import Header from "../components/Header";
import HeroChart from "../components/HeroChart";
import Subheader from "../components/Subheader";
import Devices from "../components/Devices";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-[300px] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <Subheader />
        <HeroChart />
        <div className="flex w-11/12 m-auto flex-col md:flex-row">
          <Devices />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
