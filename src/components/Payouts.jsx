import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Payouts = () => {
  return (
    <div className="grid grid-cols-12 h-full w-full">
      <div className="col-span-2 bg-blue-950 h-full w-full text-white">
        <Navbar />
      </div>
      <div className="col-span-10 h-full w-full">
        <Dashboard />
      </div>
    </div>
  );
};

export default Payouts;
