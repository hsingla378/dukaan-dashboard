import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="relative overflow-x-auto mt-2 rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg">
        <thead className="text-sm text-gray-700 bg-gray-200 rounded-lg">
          <tr>
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
              refundDatee,
              orderAmount,
            } = transaction;
            return (
              <tr key={transaction.orderId} className="border-b">
                <th
                  scope="row"
                  className="px-6 py-3 font-semibold text-blue-600"
                >
                  <a href="#">#{orderId}</a>
                </th>
                <td className="px-6 py-3">
                  {processing ? "🔵 Processing" : "🟢 Successful"}
                </td>
                <td className="px-6 py-3">131634495747</td>
                <td className="px-6 py-3">Today, 08:45 PM</td>
                <td className="px-6 py-3">₹1,125.00</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
