import { FaPaperPlane } from "react-icons/fa6";
import { formatToTwoDecimalPlaces } from "../../../utilities/currencyFormatter";
import RecentRecipients from "./RecentRecipients";

/* eslint-disable react/prop-types */
const TransferForm = ({
  recipientEmail,
  setRecipientEmail,
  amount,
  setAmount,
  message,
  setMessage,
  handleTransfer,
}) => (
  <>
    <RecentRecipients />

    <div className="mb-2">
      <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1 mt-2">
        Recipient Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full rounded border p-2 focus:outline-none focus:border-green-800"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
        placeholder="Enter recipient's email"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="amount" className="block text-sm text-gray-700 font-medium mb-1">
        Amount (&#8358;)
      </label>
      <input
        type="number"
        id="amount"
        className="w-full border-b-2 text-3xl  p-1 focus:outline-none  focus:border-b-green-800 appearance-none"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onBlur={(e) => setAmount(formatToTwoDecimalPlaces(e.target.value))}
        placeholder="0.00"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="message" className="block text-sm text-gray-700 font-medium mb-1 mt-2">
        Message (Optional)
      </label>
      <input
        type="text"
        id="message"
        className="w-full border rounded p-2 focus:outline-none focus:border-green-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Add a message for the recipient"
      ></input>
    </div>

    <button
      onClick={handleTransfer}
      className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-600 focus:outline-none transition-[background-color] transition-mild"
    >
      <span className="mr-2">Send Money</span>
      <FaPaperPlane className="inline" color="white"/>
    </button>
  </>
);

export default TransferForm;
