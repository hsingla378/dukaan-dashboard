import { TbArrowsSort } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import TransactionsTable from "./TransactionsTable";

const TransactionContainer = ({ transactions, duration }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [transactionType, setTransactionType] = useState("refunds");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const performSearch = (value) => {
    let filteredData = transactions.filter((transaction) => {
      value = value.toString();
      let orderId = transaction.orderId.toString();
      let transactionId = transaction.transactionId.toString();
      return orderId.includes(value) || transactionId.includes(value);
    });
    setFilteredTransactions(filteredData);
  };

  const debounceSearch = (event, debounceTimeout) => {
    const value = event.target.value;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(async () => {
      await performSearch(value);
    }, 500);
    setDebounceTimeout(timeout);
  };

  const activeButton = "bg-[#146EB4] text-white";
  const nonActiveButton = " bg-black bg-opacity-10 text-[#808080]";

  return (
    <div className="py-4 px-8 shadow-sm">
      <p className="text-[20px] text-[#1A181E] font-semibold capitalize">
        Transaction | This {duration || "Month"}
      </p>
      {/* Select Option */}
      <div className="my-6 text-sm flex gap-3  text-[14px]">
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
      <div className="bg-white p-2 rounded-lg my-4">
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
              onChange={(e) => debounceSearch(e, debounceTimeout)}
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
        <TransactionsTable filteredTransactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default TransactionContainer;
