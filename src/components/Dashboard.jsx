import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";
import { TbCaretDownFilled } from "react-icons/tb";

import { transactions } from "../utils/constants";
import TransactionContainer from "./TransactionContainer";
import OverviewContainer from "./OverviewContainer";
import { useState } from "react";
import TooltipContainer from "./TooltipContainer";

const Dashboard = () => {
  const [duration, setDuration] = useState("month");

  return (
    <div className=" bg-gray-600 bg-opacity-5 h-full">
      {/* Header */}
      <div className="flex justify-between items-center w-full py-[12px] px-[32px] bg-white border-b-2">
        {/* Header Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-[20px] font-semibold text-[#1A181E]">Payouts</h1>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <TooltipContainer text={"This is Tooltip"}>
              <CiCircleQuestion className="text-[14px]" />
            </TooltipContainer>

            <p className="text-[12px]">How it works</p>
          </div>
        </div>
        {/* Header Mid */}
        <div className="relative min-w-32">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-xl">
            <CiSearch className="text-[20px] font-bold text-[#808080]" />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full py-2 px-4 pl-10 text-[15px] text-[#808080] rounded-lg bg-[#F2F2F2] min-w-96"
            placeholder="Search features, tutorials, etc."
            required
          />
        </div>
        <div></div>
        {/* Header Right */}
        <div className="flex gap-3">
          <button className="p-3 rounded-full bg-gray-200 text-[20px]">
            <RiMessage2Fill className="text-[#4D4D4D]" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 text-[20px]">
            <TbCaretDownFilled className="text-[#4D4D4D]" />
          </button>
        </div>
      </div>
      <OverviewContainer setDuration={setDuration} />
      <TransactionContainer transactions={transactions} duration={duration} />
    </div>
  );
};

export default Dashboard;
