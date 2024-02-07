import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VoltageContextProvider from "./context/VoltageContext";

const App = () => {
  return (
    <VoltageContextProvider>
      <div className="font-poppins text-darkblue">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </VoltageContextProvider>
  );
};

export default App;
