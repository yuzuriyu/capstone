import React, { useContext, useEffect, useState } from "react";
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
  const { voltageData, totalVoltages, totalAccumulation } =
    useContext(VoltageContext);
  const [yesterdayAccumulation, setYesterdayAccumulation] = useState(0);

  useEffect(() => {
    // Calculate Yesterday's Accumulation
    const currentDayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const yesterdayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;
    const yesterdayTotal =
      totalVoltages[Object.keys(totalVoltages)[yesterdayIndex]];
    setYesterdayAccumulation(yesterdayTotal || 0);
  }, [totalVoltages]);

  if (!voltageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-11/12 m-auto py-10 md:w-10/12">
      <div className="border-b border-darkblue mb-4">
        <h1 className="">Total Energy Accumulated</h1>
        <p className="my-2 text-xl">{totalAccumulation} V</p>
        <p className="text-sm mb-4">
          Yesterday
          <span
            className={`${
              yesterdayAccumulation >= 1000 ? "text-green-400" : "text-red-400"
            }
                font-bold
              `}
          >
            <span className="text-lg">
              {yesterdayAccumulation >= 1000 ? " " : " -"}
            </span>
            {yesterdayAccumulation}%
          </span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={Object.entries(totalVoltages).map(([day, voltage]) => ({
            day,
            voltage,
          }))}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" fontSize={12} /> {/* Adjust font size here */}
          <YAxis fontSize={12} /> {/* Adjust font size here */}
          <Tooltip fontSize={12} /> {/* Adjust font size here */}
          <Legend fontSize={12} /> {/* Adjust font size here */}
          <Line
            type="monotone"
            dataKey="voltage"
            stroke="rgba(54, 162, 235, 1)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeroChart;
