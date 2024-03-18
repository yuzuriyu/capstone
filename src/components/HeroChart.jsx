import React, { useContext } from "react";
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

const HeroChart = () => {
  const { voltageData, totalAccumulatedVoltage } = useContext(VoltageContext);

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
      <div className="border-b border-darkblue mb-4">
        <h1 className="">Total Energy Accumulated</h1>
        <p className="my-2 text-xl"> {totalAccumulatedVoltage}</p>
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
            dataKey="totalVoltage" // Use the aggregated totalVoltage
            stroke="#17a5ce"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeroChart;
