import WeeklyChart from "../components/WeeklyChart";
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
        <div className="py-16">
          <VoltageCard />
          <WeeklyChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
