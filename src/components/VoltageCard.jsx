import React from "react";
import boltDark from "../assets/bolt--dark.png";
import walkDark from "../assets/walk--dark.png";
import { useContext } from "react";
import { VoltageContext } from "../context/VoltageContext";

const VoltageCard = () => {
  const { totalCombinedVoltage, totalLength } = useContext(VoltageContext);
  return (
    <div className="w-11/12 m-auto">
      <div className="mb-8">
        <p className="text-2xl mb-4">
          Monitor the Voltage of Foot Step Power <br /> Generator Using Arduino
        </p>
        <p className="text-sm">Simplify data control and analysis</p>
      </div>
      <div className="grid m-auto grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="rounded-2xl border px-4 py-4 bg-gradient-to-t from-pink-100 to-blue-100">
          <div className="flex justify-between">
            <p className="mb-8 text-sm">Total Accumulated Voltages</p>
            <img src={boltDark} alt="" className="w-6 h-6" />
          </div>
          <p className="text-2xl">{totalCombinedVoltage}</p>
        </div>

        <div className="rounded-2xl border px-4 py-4">
          <div className="flex justify-between">
            <p className="mb-8 text-sm">Steps</p>
            <img src={walkDark} alt="" className="w-6 h-6" />
          </div>
          <p className="text-2xl">{totalLength}</p>
        </div>
      </div>
    </div>
  );
};

export default VoltageCard;
