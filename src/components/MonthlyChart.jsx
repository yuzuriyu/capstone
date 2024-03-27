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

const MonthlyChart = () => {
  const { voltageData } = useContext(VoltageContext);
  const [aggregatedData, setAggregatedData] = useState([]);

  const [isChartInfoOpen, setIsChartInfoOpen] = useState(false);
  const handleChartInfo = () => {
    setIsChartInfoOpen((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    if (voltageData && voltageData.length > 0) {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-indexed
      const currentYear = currentDate.getFullYear();

      const weeklyAggregatedData = Array(4)
        .fill()
        .map((_, index) => ({
          week: `Week ${index + 1}`,
          totalVoltage: 0,
        }));

      voltageData.forEach((dayData) => {
        dayData.voltages.forEach((voltage) => {
          const voltageDate = new Date(voltage.timestamp);
          const voltageMonth = voltageDate.getMonth() + 1;
          const voltageYear = voltageDate.getFullYear();

          if (voltageMonth === currentMonth && voltageYear === currentYear) {
            const weekInMonth = Math.ceil(voltageDate.getDate() / 7);
            weeklyAggregatedData[weekInMonth - 1].totalVoltage +=
              voltage.voltage;
          }
        });
      });

      setAggregatedData(weeklyAggregatedData);
    }
  }, [voltageData]);

  if (!aggregatedData || aggregatedData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={aggregatedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="totalVoltage"
          stroke="#17a5ce"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlyChart;
