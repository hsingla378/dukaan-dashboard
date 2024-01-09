import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        {/* Header Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Payouts</h1>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <CiCircleQuestion className="text-lg" />
            <p>How it works</p>
          </div>
        </div>
        {/* Header Mid */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-100"
            placeholder="Search features, tutorials, etc."
            required
          />
        </div>
        <div></div>
        {/* Header Right */}
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
