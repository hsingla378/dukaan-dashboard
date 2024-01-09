import { TbArrowsSort } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const TransactionContainer = ({ transactions, duration }) => {
  const [transactionType, setTransactionType] = useState("refunds");

  const numberToCurrency = (num) => {
    num = num.toString();
    var lastThree = num.substring(num.length - 3);
    var otherNumbers = num.substring(0, num.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  };

  const activeButton = "bg-[#146EB4] text-white";
  const nonActiveButton = " bg-black bg-opacity-10 text-[#808080]";

  return (
    <div className="py-4 px-8 shadow-sm">
      <p className="text-[20px] text-[#1A181E] font-bold capitalize">
        Transaction | This {duration || "Month"}
      </p>
      {/* Select Option */}
      <div className="my-5 text-sm flex gap-3  text-[14px]">
        <button
          className={
            "py-2 px-6 rounded-full font-medium " +
            (transactionType === "payouts" ? activeButton : nonActiveButton)
          }
          onClick={() => setTransactionType("payouts")}
        >
          Payouts {"(22)"}
        </button>
        <button
          className={
            "py-2 px-6 rounded-full font-medium " +
            (transactionType === "refunds" ? activeButton : nonActiveButton)
          }
          onClick={() => setTransactionType("refunds")}
        >
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
          <div className="flex  items-stretch gap-2 text-[16px] text-[#4D4D4D]">
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
        <div className="relative overflow-x-auto mt-2 rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg">
            <thead className="text-sm text-gray-700 bg-[#F2F2F2]">
              <tr className="rounded-lg">
                <th scope="col" className="px-6 py-3">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Refund date
                </th>
                <th scope="col" className="px-6 py-3">
                  Order amout
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                const {
                  orderId,
                  processing,
                  transactionId,
                  refundDate,
                  orderAmount,
                } = transaction;
                return (
                  <tr key={orderId} className="border-b">
                    <th
                      scope="row"
                      className="px-6 py-3 font-semibold text-[#146EB4]"
                    >
                      <a href="#">#{orderId}</a>
                    </th>
                    <td className="px-6 py-3">
                      {processing ? "🔵 Processing" : "🟢 Successful"}
                    </td>
                    <td className="px-6 py-3">{transactionId}</td>
                    <td className="px-6 py-3">{refundDate}</td>
                    <td className="px-6 py-3">
                      ₹ {numberToCurrency(orderAmount)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionContainer;
