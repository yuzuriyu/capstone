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
import MonthlyChart from "./MonthlyChart";

const WeeklyChart = () => {
  const { voltageData } = useContext(VoltageContext);
  const [isChartInfoOpen, setIsChartInfoOpen] = useState(false);
  const [aggregatedData, setAggregatedData] = useState([]);

  const [activeChart, setActiveChart] = useState("weekly");

  const handleActiveChart = (chart) => {
    setActiveChart(chart);
  };

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
        <div className="py-4 flex justify-between">
          <p className="text-2xl">
            {activeChart === "weekly" ? "Weekly Data" : "Monthly Data"}
          </p>
          <div className="flex align-middle">
            <div
              className="flex mr-4 align-middle"
              onClick={() => handleActiveChart("weekly")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="mr-2"
                fill={`${activeChart === "weekly" ? "red" : ""}`}
              >
                <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
              </svg>
              <p className="text-xs">Weekly</p>
            </div>
            <div
              className="flex md:mr-12"
              onClick={() => handleActiveChart("monthly")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="mr-2"
                fill={`${activeChart === "monthly" ? "green" : ""}`}
              >
                <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
              </svg>
              <p className="text-xs">Monthly</p>
            </div>
          </div>
        </div>
        {activeChart === "weekly" && (
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
        )}
        {activeChart === "monthly" && <MonthlyChart />}
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

export default WeeklyChart;
