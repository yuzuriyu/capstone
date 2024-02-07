import React, { useEffect, useRef, useContext } from "react";
import { VoltageContext } from "../context/VoltageContext";
import Chart from "chart.js/auto";

const HeroChart = () => {
  const { voltageData, totalVoltages } = useContext(VoltageContext);

  const yesterdayAccumulation = 697;
  const totalAccumulation = 17465;
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Voltage",
            data: [12, 19, 3, 5, 2, 3, 15], // Example data, you can replace it with your own voltage data
            borderColor: "",
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <div className="w-11/12 m-auto py-4 bg-gray-100 rounded-lg my-10 px-4">
        <div className="border-b border-darkblue mb-4">
          <h1 className="">Total Energy Accumulated</h1>
          <p className="my-2 text-xl">{totalAccumulation} V</p>
          <p className="text-sm mb-4">
            Yesterday
            <span
              className={`${
                yesterdayAccumulation >= 1000
                  ? "text-green-400"
                  : "text-red-400"
              }
                font-bold
              `}
            >
              <span>{yesterdayAccumulation >= 1000 ? " ⭦" : " ⭩"}</span>
              {yesterdayAccumulation}%
            </span>
          </p>
        </div>
        <div className="m-auto">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default HeroChart;
