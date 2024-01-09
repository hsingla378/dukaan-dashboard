import { CiCircleQuestion } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";
import { TbCaretDownFilled } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { transactions } from "../utils/constants";
import TransactionTable from "./TransactionTable";

const Dashboard = () => {
  return (
    <div className=" bg-black bg-opacity-5 h-full">
      {/* Header */}
      <div className="flex justify-between items-center w-full py-4 px-8 bg-white">
        {/* Header Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Payouts</h1>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <CiCircleQuestion className="text-lg" />
            <p>How it works</p>
          </div>
        </div>
        {/* Header Mid */}
        <div className="relative min-w-32">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-xl">
            <CiSearch />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full py-3 px-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-100 min-w-96"
            placeholder="Search features, tutorials, etc."
            required
          />
        </div>
        <div></div>
        {/* Header Right */}
        <div className="flex gap-3">
          <div className="p-3 rounded-full bg-gray-200 text-xl">
            <RiMessage2Fill />
          </div>
          <div className="p-3 rounded-full bg-gray-200 text-xl">
            <TbCaretDownFilled />
          </div>
        </div>
      </div>
      {/* Overview */}
      <div className="my-4">
        {" "}
        {/* Overview  Header*/}
        <div className="flex justify-between py-4 px-8">
          <p className="text-xl font-bold">Overview</p>
          <div>
            <select className="border p-1 rounded-lg fle cursor-pointer">
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
          <div className="rounded-xl text-white overflow-hidden h-fit">
            <div className="bg-blue-500 p-4 ">
              <div className="flex gap-3 items-center">
                <p>Next Payout</p>
                <CiCircleQuestion className="text-lg" />
              </div>
              <div className="my-3 flex justify-between">
                <p className="text-2xl font-medium">₹2,312,23</p>
                <div className="flex items-center gap-1 text-sm">
                  <a href="#" className="underline">
                    23 orders
                  </a>
                  <FaAngleRight />
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-blue-700 py-2 px-4">
              <p>Next Payout date:</p>
              <p>Today, 04:00PM</p>
            </div>
          </div>
          {/* Amount Pending */}
          <div className="bg-white p-4 rounded-xl h-fit">
            <div className="flex gap-3 items-center">
              <p>Amount Pending</p>
              <CiCircleQuestion className="text-lg" />
            </div>
            <div className="my-3 flex justify-between">
              <p className="text-2xl font-medium">₹92,312,20</p>
              <div className="flex items-center gap-1 text-sm text-blue-500">
                <a href="#" className="underline">
                  13 orders
                </a>
                <FaAngleRight />
              </div>
            </div>
          </div>
          {/* Amount Processed */}
          <div className="bg-white p-4 rounded-xl h-fit">
            <div className="flex gap-3 items-center">
              <p>Amount Processed</p>
              <CiCircleQuestion className="text-lg" />
            </div>
            <div className="my-3 flex justify-between">
              <p className="text-2xl font-medium">₹23,92,312.19</p>
            </div>
          </div>
        </div>
      </div>
      {/* Transactions Container*/}
      <div className="py-4 px-8">
        <p className="text-xl font-bold">Transaction | {"This Month"}</p>
        {/* Select Option */}
        <div className="my-5 text-sm flex gap-3">
          <button className="bg-gray-200 py-2 px-6 rounded-full font-medium text-gray-700">
            Payouts {"(22)"}
          </button>
          <button className="bg-blue-600 py-2 px-6 rounded-full font-medium text-white">
            Refunds {"(6)"}
          </button>
        </div>
        {/* Transactions Table */}
        <div className="bg-white p-2 rounded-lg">
          {" "}
          {/* Search / Sort / Download */}
          <div className="flex justify-between items-center">
            {/* Search */}
            <div className="relative min-w-32 flex items-center">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-xl">
                <CiSearch />
              </div>
              <input
                type="search"
                id="search"
                className="block w-full py-3 px-4 pl-10 text-sm text-gray-900 rounded-lg bg-white border"
                placeholder="Order ID or transaction ID"
                required
              />
            </div>
            {/* Sort / Download */}
            <div className="flex  items-stretch gap-2">
              <button className="border py-2 px-4 rounded-lg flex items-center gap-2">
                Sort{" "}
                <span>
                  <TbArrowsSort />
                </span>
              </button>
              <button className="border py-2 px-4 rounded-lg flex items-center">
                <FiDownload />
              </button>
            </div>
          </div>
          {/* Table */}
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
