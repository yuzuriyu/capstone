import HeroChart from "../components/HeroChart";
import Subheader from "../components/Subheader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import VoltageCard from "../components/VoltageCard";

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-[300px] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <Subheader />
        <VoltageCard />
        <HeroChart />
        <div className="flex w-11/12 m-auto flex-col md:flex-row md:w-10/12"></div>
      </div>
    </div>
  );
};

export default HomePage;
