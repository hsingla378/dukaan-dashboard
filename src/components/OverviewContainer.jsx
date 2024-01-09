import { CiCircleQuestion } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";

const OverviewContainer = ({ setDuration }) => {
  return (
    <div className="my-4">
      {" "}
      {/* Overview Header */}
      <div className="flex justify-between py-3 px-8">
        <p className="text-[20px] text-[#1A181E] font-bold">Overview</p>
        <div>
          <select
            className="border-2 p-2 rounded-lg flex cursor-pointer"
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="month">This Month</option>
            <option value="week">This Week</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>
      {/* Overview Grid */}
      <div className="grid grid-cols-3 gap-5 py-4 px-8">
        {/* Next Payout */}
        <div className="rounded-lg text-white overflow-hidden h-fit shadow-sm">
          <div className="bg-[#146EB4] p-4 ">
            <div className="flex gap-2 items-center text-base">
              <p>Next Payout</p>
              <CiCircleQuestion className="text-lg" />
            </div>
            <div className="mt-3 mb-2 flex justify-between">
              <p className="text-[32px] font-medium">₹2,312.23</p>
              <div className="flex items-center gap-1 text-sm">
                <a href="#" className="underline text-[16px] font-medium">
                  23 orders
                </a>
                <FaAngleRight className="text-xl" />
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-[#0E4F82] py-2 px-4 text-[14px]">
            <p className="font-light">Next Payout date:</p>
            <p className="font-normal">Today, 04:00PM</p>
          </div>
        </div>
        {/* Amount Pending */}
        <div className="bg-white p-4 rounded-xl h-fit shadow-sm">
          <div className="flex gap-2 items-center text-base">
            <p>Amount Pending</p>
            <CiCircleQuestion className="text-lg" />
          </div>
          <div className="mt-3 mb-2 flex justify-between">
            <p className="text-[32px] font-medium">₹92,312,20</p>
            <div className="flex items-center gap-1 text-sm text-blue-500">
              <a href="#" className="underline text-[16px] font-medium">
                13 orders
              </a>
              <FaAngleRight className="text-xl" />
            </div>
          </div>
        </div>
        {/* Amount Processed */}
        <div className="bg-white p-4 rounded-xl h-fit shadow-sm">
          <div className="flex gap-2 items-center">
            <p>Amount Processed</p>
            <CiCircleQuestion className="text-lg" />
          </div>
          <div className="mt-3 mb-2 flex justify-between">
            <p className="text-[32px] font-medium">₹23,92,312.19</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContainer;
