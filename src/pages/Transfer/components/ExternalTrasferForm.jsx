import { FaPaperPlane } from "react-icons/fa6";
import { formatToTwoDecimalPlaces } from "../../../utilities/currencyFormatter";
import React, { useState } from 'react';
import BankDropdown from "./BankDropdown";

/* eslint-disable react/prop-types */
const ExternalTransferForm = ({
  amount,
  setAmount,
  selectedBank,
  setSelectedBank,
  accountNumber,
  setAccountNumber,
  message,
  setMessage,
  handleTransfer,
}) => (
  <>
    <div className="mb-2">
      <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1 mt-2">
        Recipient Account Number
      </label>
      <input
        type="email"
        id="email"
        className="w-full rounded border p-2 focus:outline-none focus:border-green-800"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Account Number"
      />
    </div>

    <BankDropdown selectedBank={selectedBank} setSelectedBank={setSelectedBank}/>

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
    {/* <BankDropdown selectedBank={selectedBank} setSelectedBank={setSelectedBank}/> */}

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


// const BankDropdown = ({ selectedBank, setSelectedBank }) => {
//   const banks = [
//     { name: "Bank A", logo: "path/to/bankA-logo.png" },
//     { name: "Bank B", logo: "path/to/bankB-logo.png" },
//     { name: "Bank C", logo: "path/to/bankC-logo.png" },
//     { name: "Bank D", logo: "path/to/bankD-logo.png" },
//   ];

//   return (
//     <div className="mb-4">
//       <label htmlFor="bank" className="block text-sm text-gray-700 font-medium mb-1 mt-2">
//         Select Bank
//       </label>
//       <select
//         id="bank"
//         className="w-full border rounded p-2 focus:outline-none focus:border-green-800"
//         value={selectedBank}
//         onChange={(e) => setSelectedBank(e.target.value)}
//       >
//         <option value="" disabled>Select a bank</option>
//         {banks.map((bank, index) => (
//           <option key={index} value={bank.name}>
//             <img src={bank.logo} alt={`${bank.name} logo`} className="inline-block w-6 h-6 mr-2" />
//             {bank.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

export default ExternalTransferForm;
