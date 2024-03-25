import React, { useEffect, useState, createContext } from "react";

const VoltageContext = createContext();

const VoltageContextProvider = ({ children }) => {
  const [voltageData, setVoltageData] = useState([]);
  const [totalCombinedVoltage, setTotalCombinedVoltage] = useState(0);
  const [totalLength, setTotalLength] = useState(0);

  useEffect(() => {
    const fetchVoltageData = async () => {
      try {
        const res = await fetch("http://localhost:4000/voltages");
        const data = await res.json();
        setVoltageData(data.voltage);
      } catch (error) {
        console.error("Error fetching voltage data:", error);
      }
    };

    fetchVoltageData();
  }, []);

  useEffect(() => {
    // Calculate total combined voltage
    let totalVoltage = 0;
    voltageData.forEach((dayData) => {
      dayData.voltages.forEach((voltageObj) => {
        totalVoltage += voltageObj.voltage;
      });
    });
    setTotalCombinedVoltage(totalVoltage);

    // Calculate total length of all voltages combined
    let totalLength = 0;
    voltageData.forEach((dayData) => {
      totalLength += dayData.voltages.length;
    });
    setTotalLength(totalLength);
  }, [voltageData]);

  return (
    <VoltageContext.Provider
      value={{
        voltageData,
        totalCombinedVoltage,
        totalLength,
      }}
    >
      {children}
    </VoltageContext.Provider>
  );
};

export default VoltageContextProvider;
export { VoltageContext, VoltageContextProvider };
