/* eslint-disable react/prop-types */
import Option from "./Option";
import { FaMoneyBillAlt, FaUniversity, FaCopy, FaMobileAlt } from "react-icons/fa";
import { PiCreditCardFill, PiHandDepositFill, PiHandWithdrawFill, PiPiggyBankFill, PiPokerChipFill } from "react-icons/pi";
import { FaPlugCircleBolt } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import { TbArcheryArrow } from "react-icons/tb";
import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";

const OptionsSection = ({ title, options }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-5 gap-4">
        {options.map((option) => (
          <Option
            key={option.id}
            icon={option.icon}
            label={option.label}
            onClick={option.onClick}
          />
        ))}
      </div>
    </div>
  );
};


const AllOptions = () => {

  const sections = [
    {
      title: "Funds",
      options: [
        { id: 1, label: "Add Money", icon: <PiHandDepositFill />, onClick: () => console.log("A") },
        { id: 2, label: "CoreSend", icon: <FaMoneyBillAlt />, onClick: () => console.log("To Opay clicked") },
        { id: 3, label: "Send to Bank", icon: <FaUniversity />, onClick: () => console.log("To Bank clicked") },
        { id: 4, label: "Withdraw", icon: <PiHandWithdrawFill />, onClick: () => console.log("To Bank clicked") },
      ],
    },
    {
      title: "Utilities and Subscriptions",
      options: [
        { id: 5, label: "Airtime", icon: <FaMobileAlt />, onClick: () => console.log("Airtime clicked") },
        { id: 6, label: "Electricity", icon: <FaPlugCircleBolt />, onClick: () => console.log("Copy clicked") },
        { id: 7, label: "Betting", icon: <PiPokerChipFill />, onClick: () => console.log("Airtime clicked") },
        { id: 8, label: "Subscriptions", icon: <MdSubscriptions />, onClick: () => console.log("Airtime clicked") },
        { id: 9, label: "Card Services", icon: <PiCreditCardFill />, onClick: () => console.log("Airtime clicked") },
      ],
    },
    {
      title: "Savings",
      options: [
        { id: 10, label: "Savings Plan", icon: <PiPiggyBankFill />, onClick: () => console.log("Save Now clicked") },
        { id: 11, label: "Goals", icon: <TbArcheryArrow />, onClick: () => console.log("Goals clicked") },
      ],
    },
    {
      title: "Activity",
      options: [
        { id: 12, label: "Transaction History", icon: <FaCopy />, onClick: () => console.log("Transactions clicked") },
        { id: 13, label: "Get Statement", icon: <HiMiniDocumentMagnifyingGlass />, onClick: () => console.log("Statements clicked") },
      ],
    },
  ];

  return (
      <div className="p-6 pt-0">
      {sections.map((section, index) => (
        <OptionsSection key={index} title={section.title} options={section.options} />
      ))}
    </div>
  );
};

export default AllOptions;
