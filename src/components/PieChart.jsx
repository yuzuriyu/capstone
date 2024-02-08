import React, { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { VoltageContext } from "../context/VoltageContext";

const PieChartComponent = () => {
  const { latestRecord } = useContext(VoltageContext);

  // Use state to store the latest voltage and previous voltages, trigger re-renders
  const [voltages, setVoltages] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    // Update the voltages when latestRecord changes
    if (latestRecord) {
      // Shift the latest voltage to previous positions
      setVoltages((prevVoltages) => [
        latestRecord.voltage,
        prevVoltages[0],
        prevVoltages[1],
        prevVoltages[2],
        prevVoltages[3],
      ]);
    }
  }, [latestRecord]);

  // Create data array with the latest and previous voltages
  const data = [
    { device: "Latest", voltage: voltages[0] },
    { device: "Previous", voltage: voltages[1] },
    { device: "3rd Last", voltage: voltages[2] },
    { device: "4th Last", voltage: voltages[3] },
    { device: "5th Last", voltage: voltages[4] },
  ];

  // Define colors for each section of the pie chart
  const colors = ["#007bff", "#4e8df5", "#74a9f9", "#99c4fd", "#bfdfff"];

  return (
    <div className="w-11/12 m-auto">
      <h1 className="mb-4">Device</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie data={data} dataKey="voltage" nameKey="device" label>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
