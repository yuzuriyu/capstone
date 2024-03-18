import React from "react";
import boltDark from "../assets/bolt--dark.png";
import walkDark from "../assets/walk--dark.png";
import sendDark from "../assets/send--dark.png";
import { useContext } from "react";
import { VoltageContext } from "../context/VoltageContext";

const VoltageCard = () => {
  const { totalAccumulatedVoltage } = useContext(VoltageContext);
  return (
    <div className="w-10/12 m-auto">
      <div className="mb-8">
        <p className="text-2xl mb-4">
          Monitor the Voltage of Foot Step Power <br /> Generator Using Arduino
        </p>
        <p className="text-sm">Simplify data control and analysis</p>
      </div>
      <div className="grid m-auto grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="rounded border px-4 py-4 bg-gradient-to-t from-pink-100 to-blue-100">
          <div className="flex justify-between">
            <p className="mb-4 text-sm">Total Accumulated Voltages</p>
            <img src={boltDark} alt="" className="w-6 h-6" />
          </div>
          <p className="text-2xl">{totalAccumulatedVoltage}</p>
        </div>
        <div className="rounded border px-4 py-4 bg-skyblue">
          <div className="flex justify-between">
            <p className="mb-4 text-sm">Recent Voltage</p>
            <img src={sendDark} alt="" className="w-6 h-6" />
          </div>
          <p className="text-2xl">0</p>
        </div>
        <div className="rounded border px-4 py-4">
          <div className="flex justify-between">
            <p className="mb-4 text-sm">Steps</p>
            <img src={walkDark} alt="" className="w-6 h-6" />
          </div>
          <p className="text-2xl">69</p>
        </div>
      </div>
    </div>
  );
};

export default VoltageCard;
