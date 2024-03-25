import React, { useContext, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { VoltageContext } from "../context/VoltageContext";
import ChartInfo from "./ChartInfo";
import Voltlist from "./Voltlist";

const HeroChart = () => {
  const { voltageData } = useContext(VoltageContext);
  const [isChartInfoOpen, setIsChartInfoOpen] = useState(false);
  const [aggregatedData, setAggregatedData] = useState([]);

  useEffect(() => {
    if (voltageData && voltageData.length > 0) {
      const data = voltageData.map((dayData) => {
        const totalVoltage = dayData.voltages.reduce(
          (acc, curr) => acc + curr.voltage,
          0
        );
        return { day: dayData.day, totalVoltage };
      });
      setAggregatedData(data);
    }
  }, [voltageData]);

  const handleChartInfo = () => {
    setIsChartInfoOpen((prevStatus) => !prevStatus);
  };

  if (!aggregatedData || aggregatedData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-11/12 m-auto pt-4 pb-10 flex gap-10 flex-col lg:flex-row">
      <div className="lg:w-8/12">
        <div className="py-4">
          <p className="text-2xl">Weekly Data</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={aggregatedData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend fontSize={12} />
            <Line
              type="monotone"
              dataKey="totalVoltage"
              stroke="#17a5ce"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        <p
          className="text-blue-400 text-xs cursor-pointer hover:underline"
          onClick={() => handleChartInfo()}
        >
          {isChartInfoOpen ? "See less" : "Learn More"}
        </p>
        {isChartInfoOpen && <ChartInfo />}
      </div>
      <Voltlist />
    </div>
  );
};

export default HeroChart;
