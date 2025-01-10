/* eslint-disable react/prop-types */
import { IoArrowDownCircle, IoArrowUpCircle } from "react-icons/io5";
import { PiBank, PiDeviceMobile, PiTelevision, PiUploadSimple } from "react-icons/pi";

const TransactionPreviewItem = ({
  type,
  status,
  amount,
  recipient,
  transactionId,
  timestamp,
  entry,
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
      <td className="p-3">
        {type === "transfer" && (
          <div className="flex gap-2 items-center">
            <PiUploadSimple className="w-8 md:w-12 h-8 md:h-12 object-cover aspect-square hidden lg:block" />

            <div>
              <h3 className="text-sm md:text-base truncate max-w-[20vw]">
                Transfer to{" "}
                <span className="uppercase font-bold">{recipient}</span>
              </h3>
              <p className="text-xs text-gray-400 hidden lg:block">
                ID: {transactionId}
              </p>
            </div>
          </div>
        )}
        {type === "airtime" && (
          <div className="flex gap-2 items-center ">
            <PiDeviceMobile className="w-8 md:w-12 h-8 md:h-12 object-cover aspect-square hidden lg:block"  />
            <div>
              <h3 className="text-sm md:text-base truncate max-w-[20vw]">
                Airtime
              </h3>
              <p className="text-xs text-gray-400 hidden lg:block">
                ID: {transactionId}
              </p>
            </div>
          </div>
        )}
        {type === "deposit" && (
          <div className="flex gap-2 items-center ">
            <PiBank className=" w-8 md:w-12 h-8 md:h-12 object-cover aspect-square hidden lg:block" />
            <div>
              <h3 className="text-sm md:text-base truncate max-w-[20vw]">
                Bank Deposit
              </h3>
              <p className="text-xs text-gray-400 hidden lg:block">
                ID: {transactionId}
              </p>
            </div>
          </div>
        )}
        {type === "subscription" && (
          <div className="flex gap-2 items-center ">
            <PiTelevision className=" w-8 md:w-12 h-8 md:h-12 object-cover aspect-square hidden lg:block" />
            <div>
              <h3 className="text-sm md:text-base truncate max-w-[20vw]">
                Netflix Premium Subscription
              </h3>
              <p className="text-xs text-gray-400 hidden lg:block">
                ID: {transactionId}
              </p>
            </div>
          </div>
        )}
      </td>

      {/* Display Date and Time */}
      <td className="p-2 md:p-3">
        <div>
          <p className="text-xs md:text-sm font-semibold text-dark">
            {formattedDate}
          </p>
          <p className="text-xs text-gray-400">{formattedTime}</p>
        </div>
      </td>

      {/* Display Transaction Direction */}
      <td className="p-3 hidden lg:table-cell">
        <p
          className={
            entry === "outgoing"
              ? "text-red-500 font-semibold"
              : "text-green-500 font-semibold"
          }
        >
          {entry === "outgoing" ? (
            <IoArrowUpCircle className="inline mr-2" />
          ) : (
            <IoArrowDownCircle className="inline mr-2" />
          )}
          <span className="hidden md:inline">
            {entry[0].toUpperCase() + entry.slice(1)}
          </span>
        </p>
      </td>

      {/* Display Amount */}
      <td className="p-3 text-sm sm:text-base">NGN {amount.toLocaleString()}</td>

      {/* Display Status */}
      <td className="p-3">
        <p
          className={`mx-auto md:mx-0 aspect-square md:aspect-auto px-2 py-1 rounded-xl text-sm w-fit ${
            status === "Successful"
              ? "bg-green-300 text-green-600"
              : status === "Pending"
              ? "bg-yellow-300 text-yellow-600"
              : "bg-red-300 text-red-600"
          }`}
        >
          <span className="hidden md:inline">{status}</span>
        </p>
      </td>
    </tr>
  );
};

export default TransactionPreviewItem;
