import React from "react";

const ChartInfo = () => {
  return (
    <div className="px-4 py-4 text-sm">
      This weekly chart integrates with the VoltageContext that is responsible
      for the calculation and fetching of the voltage data from the server. It
      aggregates voltage data by summing up voltages for each day and prepares
      it for visualization. Utilizing the recharts library, it renders a
      responsive line chart that dynamically adjusts to different screen sizes.
      The chart includes essential elements such as Cartesian grid lines, axes,
      tooltips, and a legend, enhancing user interaction and data exploration.
    </div>
  );
};

export default ChartInfo;
