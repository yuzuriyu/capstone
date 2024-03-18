import React, { useContext, useState } from "react";
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

const HeroChart = () => {
  const { voltageData, totalAccumulatedVoltage } = useContext(VoltageContext);
  const [isChartInfoOpen, setIsChartInfoOpen] = useState(false);

  const handleChartInfo = () => {
    setIsChartInfoOpen((prevStatus) => !prevStatus);
  };

  if (!voltageData) {
    return <div>Loading...</div>;
  }

  // Aggregate voltage data for each day
  const aggregatedData = voltageData.reduce((acc, item) => {
    const day = item.day;
    const totalVoltage = item.voltages.reduce(
      (sum, voltage) => sum + voltage,
      0
    );
    acc.push({ day, totalVoltage });
    return acc;
  }, []);

  return (
    <div className="w-11/12 m-auto py-10 md:w-10/12">
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
            dataKey="totalVoltage" // Use the aggregated totalVoltage
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
  );
};

export default HeroChart;
