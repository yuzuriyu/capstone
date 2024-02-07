import React, { useEffect, useState, createContext } from "react";

const VoltageContext = createContext();

const VoltageContextProvider = ({ children }) => {
  const [latestRecord, setLatestRecord] = useState(0);
  const [voltageData, setVoltageData] = useState([
    { day: "Monday", voltages: [12] },
    { day: "Tuesday", voltages: [45] },
    { day: "Wednesday", voltages: [22] },
    { day: "Thursday", voltages: [39] },
    { day: "Friday", voltages: [55] },
    { day: "Saturday", voltages: [16] },
    { day: "Sunday", voltages: [18] },
  ]);

  const [totalVoltages, setTotalVoltages] = useState({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });

  useEffect(() => {
    const fetchVoltageData = async () => {
      try {
        const res = await fetch("http://localhost:7000/voltage");
        const data = await res.json();

        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        const yesterdayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1; // Sunday is 0, so to get Saturday, we use 6.
        setLatestRecord(data);
        setVoltageData((prevData) => {
          return prevData.map((item, index) => {
            if (index === yesterdayIndex) {
              return {
                ...item,
                voltages: [...item.voltages, data.voltage],
              };
            }
            return item;
          });
        });
      } catch (error) {
        console.error("Error fetching voltage data:", error);
      }
    };

    fetchVoltageData();

    const interval = setInterval(fetchVoltageData, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatedTotalVoltages = {};
    voltageData.forEach((dayData) => {
      const totalVoltage = dayData.voltages.reduce(
        (acc, voltage) => acc + voltage,
        0
      );
      updatedTotalVoltages[dayData.day] = totalVoltage;
    });
    setTotalVoltages(updatedTotalVoltages);
  }, [voltageData]);

  // Calculate the total accumulation for all days
  const totalAccumulation = Object.values(totalVoltages).reduce(
    (acc, voltage) => acc + voltage,
    0
  );
  console.log(latestRecord);
  return (
    <VoltageContext.Provider
      value={{
        voltageData,
        totalVoltages,
        latestRecord,
        totalAccumulation,
      }}
    >
      {children}
    </VoltageContext.Provider>
  );
};

export default VoltageContextProvider;
export { VoltageContext, VoltageContextProvider };
