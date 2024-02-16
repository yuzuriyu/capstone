import React, { useEffect, useState, createContext } from "react";

const VoltageContext = createContext();

const VoltageContextProvider = ({ children }) => {
  const [latestRecord, setLatestRecord] = useState(0);
  const [voltageData, setVoltageData] = useState(
    JSON.parse(localStorage.getItem("voltageData")) || [
      { day: "Mon", voltages: [12] },
      { day: "Tue", voltages: [45] },
      { day: "Wed", voltages: [22] },
      { day: "Thu", voltages: [39] },
      { day: "Fri", voltages: [55] },
      { day: "Sat", voltages: [16] },
      { day: "Sun", voltages: [18] },
    ]
  );

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
        const res = await fetch(
          "https://important-jersey-hen.cyclic.app/voltage"
        );
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

    const interval = setInterval(fetchVoltageData, 5000);

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

  // Calculate today's accumulation
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const todayAccumulation =
    totalVoltages[Object.keys(totalVoltages)[currentDayIndex]];

  useEffect(() => {
    // Save voltage data to Local Storage whenever it changes
    localStorage.setItem("voltageData", JSON.stringify(voltageData));
    // Update total voltages...
  }, [voltageData]);

  console.log(todayAccumulation);
  return (
    <VoltageContext.Provider
      value={{
        voltageData,
        totalVoltages,
        latestRecord,
        totalAccumulation,
        todayAccumulation,
      }}
    >
      {children}
    </VoltageContext.Provider>
  );
};

export default VoltageContextProvider;
export { VoltageContext, VoltageContextProvider };
