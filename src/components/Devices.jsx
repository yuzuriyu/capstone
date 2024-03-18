import React, { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { VoltageContext } from "../context/VoltageContext";

const Devices = () => {
  const { voltageData } = useContext(VoltageContext);

  // Function to get the device label
  const getDeviceLabel = (index) => {
    switch (index) {
      case 1:
        return "Latest";
      case 2:
        return "Previous";
      case 3:
        return "3rd Last";
      default:
        return `${index}th Last`;
    }
  };

  const getLastFiveVoltages = () => {
    if (voltageData && voltageData.length > 0) {
      // Initialize the array with placeholders for the last five records
      let lastFiveVoltagesArray = [
        { device: "Latest", voltage: null },
        { device: "Previous", voltage: null },
        { device: "3rd Last", voltage: null },
        { device: "4th Last", voltage: null },
        { device: "5th Last", voltage: null },
      ];

      // Get the latest record
      const latestRecord = voltageData[voltageData.length - 1];

      // Assign the latest voltage to the "Latest" label
      if (latestRecord.voltages.length > 0) {
        lastFiveVoltagesArray[0].voltage =
          latestRecord.voltages[latestRecord.voltages.length - 1];
      }

      // Fill the rest with the voltages from previous records
      for (let i = 1; i < voltageData.length && i < 5; i++) {
        const record = voltageData[voltageData.length - i - 1];
        const voltageIndex = record.voltages.length - 1;
        lastFiveVoltagesArray[i].voltage = record.voltages[voltageIndex];
      }

      return lastFiveVoltagesArray;
    }
    return [];
  };

  const [lastFiveVoltages, setLastFiveVoltages] = useState(
    getLastFiveVoltages()
  );

  useEffect(() => {
    setLastFiveVoltages(getLastFiveVoltages());
  }, [voltageData]);

  useEffect(() => {
    // When new data is added, move the previous voltage to "Previous"
    if (voltageData.length > 1) {
      const previousRecord = voltageData[voltageData.length - 2];
      const previousVoltage =
        previousRecord.voltages[previousRecord.voltages.length - 1];
      setLastFiveVoltages((prevVoltages) => [
        { device: "Latest", voltage: prevVoltages[0].voltage },
        { device: "Previous", voltage: previousVoltage },
        { device: "3rd Last", voltage: prevVoltages[1].voltage },
        { device: "4th Last", voltage: prevVoltages[2].voltage },
        { device: "5th Last", voltage: prevVoltages[3].voltage },
      ]);
    }
  }, [voltageData]);

  return (
    <div className="w-full m-auto md:m-0 lg:w-1/2">
      <h1>Last Five Recorded Voltages</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={lastFiveVoltages}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="device" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="voltage" fill="skyblue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Devices;
