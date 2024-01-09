import React from "react";

const TransactionsTable = ({ filteredTransactions }) => {
  const numberToCurrency = (num) => {
    num = num.toString();
    var lastThree = num.substring(num.length - 3);
    var otherNumbers = num.substring(0, num.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  };

  return (
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
          {filteredTransactions.map((transaction) => {
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
                <td className="px-6 py-3">₹ {numberToCurrency(orderAmount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
