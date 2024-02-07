import React from "react";
import Header from "../components/Header";
import HeroChart from "../components/HeroChart";
import Subheader from "../components/Subheader";
import Devices from "../components/Devices";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Subheader />
      <HeroChart />
      <Devices />
    </div>
  );
};

export default HomePage;
