/* eslint-disable react/prop-types */
import { HandCoins } from "lucide-react";
import { IoArrowUpCircle } from "react-icons/io5";
import { PiBankBold } from "react-icons/pi";

const TransactionPreviewItem = ({
  type,
  status,
  amount,
  recipient,
  transactionId,
  timestamp,
}) => {
  const formattedDate = new Date(timestamp).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedTime = new Date(timestamp).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <tr className="transition-hover duration-300 hover:bg-gray-200 cursor-pointer">
      {/* Display the first column based on the transaction type */}
      <td className="p-3">
        {type === "transfer" && (
          <div className="flex gap-2 items-center">
            <img
              src="/assets/cards.png"
              alt="Transaction icon"
              className="rounded-full w-8 md:w-12 object-cover shadow-md aspect-square"
            />
            <div>
              <h3>
                Transfer to{" "}
                <span className="uppercase font-bold">{recipient}</span>
              </h3>
              <p className="text-xs text-gray-400">ID: {transactionId}</p>
            </div>
          </div>
        )}
        {type === "airtime" && (
          <div className="flex gap-2 items-center ">
            <img
              src="https://hallmarknews.com/wp-content/uploads/2023/11/Compress_20231117_094424_4513.png"
              alt=""
              className="shadow-md rounded-full w-8 md:w-12 object-cover aspect-square"
            />
            <h3>Airtime</h3>
          </div>
        )}
        {type === "deposit" && (
          <div className="flex gap-2 items-center ">
            <PiBankBold className="shadow-md rounded-full w-8 md:w-12 h-8 md:h-12 object-cover aspect-square" />
            <h3 className="">Bank Deposit</h3>
          </div>
        )}
        {type === "subscription" && (
          <div className="flex gap-2 items-center ">
            <HandCoins className="shadow-md rounded-full w-8 md:w-12 h-8 md:h-12 object-cover aspect-square" />
            <h3 className="">Netflix Premium Subscription</h3>
          </div>
        )}
      </td>

      {/* Display Date and Time */}
      <td className="p-3">
        <div>
          <p className="text-sm font-semibold text-dark">{formattedDate}</p>
          <p className="text-xs text-gray-400">{formattedTime}</p>
        </div>
      </td>

      {/* Display Transaction Direction */}
      <td className="p-3">
        <p
          className={
            (type === "transfer") |
            (type === "airtime") |
            (type === "subscription")
              ? "text-red-500 font-semibold"
              : "text-green-500 font-semibold"
          }
        >
          <IoArrowUpCircle className="inline mr-2" />
          {(type === "transfer") |
          (type === "airtime") |
          (type === "subscription")
            ? "Outgoing"
            : "Incoming"}
        </p>
      </td>

      {/* Display Amount */}
      <td className="p-3">NGN {amount.toLocaleString()}</td>

      {/* Display Status */}
      <td className="p-3">
        <p
          className={`px-2 py-1 rounded-xl text-sm w-fit ${
            status === "Successful"
              ? "bg-green-300 text-green-600"
              : status === "Pending"
              ? "bg-yellow-300 text-yellow-600"
              : "bg-red-300 text-red-600"
          }`}
        >
          {status}
        </p>
      </td>
    </tr>
  );
};

export default TransactionPreviewItem;
