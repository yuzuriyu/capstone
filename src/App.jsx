import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VoltageContextProvider from "./context/VoltageContext";
import PageContextProvider from "./context/PageContext";

const App = () => {
  return (
    <PageContextProvider>
      <VoltageContextProvider>
        <div className="font-poppins text-darkblue">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </VoltageContextProvider>
    </PageContextProvider>
  );
};

export default App;
