"use client";

import React, { useEffect, useState, createContext } from "react";

const VoltageContext = createContext();

const VoltageContextProvider = ({ children }) => {
  const [latestRecord, setLatestRecord] = useState(0);
  const [voltageData, setVoltageData] = useState([]);
  const [totalAccumulatedVoltage, setTotalAccumulatedVoltage] = useState(0);

  const submitVoltage = async (day, voltages) => {
    try {
      const response = await fetch(
        `https://ill-cyan-ostrich-kit.cyclic.app/submit-voltage/${day}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ voltages }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // Handle success response
      } else {
        // Handle error response
        console.error("Failed to submit voltage:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting voltage:", error);
    }
  };

  useEffect(() => {
    const fetchVoltageData = async () => {
      try {
        const res = await fetch(
          "https://ill-cyan-ostrich-kit.cyclic.app/voltages"
        );
        const data = await res.json();

        // Check if data.voltage is an array before setting voltageData
        if (Array.isArray(data.voltage)) {
          setVoltageData(data.voltage);
        } else {
          console.error("Voltage data is not an array:", data.voltage);
        }
      } catch (error) {
        console.error("Error fetching voltage data:", error);
      }
    };

    fetchVoltageData();
  }, []);

  useEffect(() => {
    // Calculate total accumulated voltage
    let totalVoltage = 0;
    // Check if voltageData is an array before iterating
    if (Array.isArray(voltageData)) {
      voltageData.forEach((item) => {
        // Check if item.voltages is an array before iterating
        if (Array.isArray(item.voltages)) {
          item.voltages.forEach((voltage) => {
            totalVoltage += voltage;
          });
        } else {
          console.error("Item voltages is not an array:", item.voltages);
        }
      });
    } else {
      console.error("Voltage data is not an array:", voltageData);
    }
    setTotalAccumulatedVoltage(totalVoltage);
  }, [voltageData]);
  console.log(totalAccumulatedVoltage);
  return (
    <VoltageContext.Provider
      value={{
        voltageData,
        latestRecord,
        totalAccumulatedVoltage,
        submitVoltage,
      }}
    >
      {children}
    </VoltageContext.Provider>
  );
};

export default VoltageContextProvider;
export { VoltageContext, VoltageContextProvider };
