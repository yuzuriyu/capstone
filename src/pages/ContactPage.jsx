import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="flex">
      <div className="w-[300px] hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
