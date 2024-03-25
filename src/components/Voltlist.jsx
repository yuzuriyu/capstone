import React, { useContext, useState, useEffect } from "react";
import { VoltageContext } from "../context/VoltageContext";

const Voltlist = () => {
  const [currentDay, setCurrentDay] = useState();
  const [selectedDay, setSelectedDay] = useState(currentDay); // Use currentDay here
  const [activeSortMethod, setActiveSortMethod] = useState("desc");
  const { voltageData } = useContext(VoltageContext);

  useEffect(() => {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString("en-US", {
      weekday: "short",
    });
    setCurrentDay(currentDay); // Set currentDay
    setSelectedDay(currentDay); // Set selectedDay to the current day abbreviation
  }, []);

  const toggleSortMethod = () => {
    setActiveSortMethod((prevMethod) =>
      prevMethod === "desc" ? "asc" : "desc"
    );
  };

  const renderDayData = (dayData) => {
    if (!dayData || !dayData.voltages) return null;

    const sortedVoltages =
      activeSortMethod === "desc"
        ? [...dayData.voltages].reverse()
        : dayData.voltages;

    return sortedVoltages.map((voltageObj, index) => {
      const voltage = voltageObj.voltage;

      return (
        <div
          key={index}
          className={`py-5 px-7 flex justify-between align-middle ${
            index === 0 ? "rounded-2xl py-0 pt-8 pb-8 bg-matteblack" : ""
          }`}
        >
          <p className={`${index === 0 ? "text-white" : ""}`}>
            {voltage} volts
          </p>
          <div className="flex gap-2">
            <p className={`text-xs ${index === 0 ? "text-white" : ""}`}>
              {voltageObj.timestamp}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="py-4 mb-2 flex justify-between">
        <div className="flex">
          <svg
            onClick={toggleSortMethod}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={`${activeSortMethod === "asc" ? "red" : ""}`}
            className="mr-4"
          >
            <path d="M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4 2 8h3z"></path>
          </svg>
          <svg
            onClick={toggleSortMethod}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={`${activeSortMethod === "desc" ? "green" : ""}`}
          >
            <path d="m6 20 4-4H7V4H5v12H2zm5-12h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5z"></path>
          </svg>
        </div>
        <select
          className="text-sm"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {voltageData.map((day) => (
            <option key={day.day} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <div className="h-[350px] overflow-auto">
        {voltageData.map((day) => (
          <div key={day.day}>
            {selectedDay === day.day && renderDayData(day)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voltlist;
