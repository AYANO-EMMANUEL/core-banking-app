import React, { useState } from "react";
import Modal from "../../components/Modal"; // Adjust the import path as necessary
import mtn from "./assets/mtn.png";
import glo from "./assets/glo.png";
import airtel from "./assets/airtel.svg";
import { FaCheckCircle } from "react-icons/fa";

const Airtime = () => {
  const [currentProvider, setCurrentProvider] = useState("mtn");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const providers = [
    { name: "mtn", icon: mtn, color: "yellow" },
    { name: "airtel", icon: airtel, color: "neutral" },
    { name: "glo", icon: glo, color: "green" },
  ];

  const handlePurchase = () => {
    console.log(
      `Provider: ${provider}, Phone Number: ${phoneNumber}, Amount: ${amount}`
    );
    setIsModalOpen(false);
  };

  return (
    <Modal>
      <div className="p-1 rounded-lg w-full md:w-[350px] mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-900">
          Purchase Airtime
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePurchase();
          }}
        >
          <div className="mb-4">
            <label htmlFor="provider" className="block text-sm font-medium">
              Provider:
            </label>
            <div className="grid gap-2 grid-cols-3">
              {providers.map((provider) => (
                <div
                  key={provider.name}
                  className={`rounded-md flex items-center justify-center h-12 bg-${provider.color}-200 cursor-pointer relative`}
                  onClick={() => setCurrentProvider(provider.name)}
                >
                  <img src={provider.icon} alt="" className="w-[24px]" />
                  {provider.name === currentProvider && (
                    <FaCheckCircle className="text-green-500 absolute w-3 top-1 right-1.5" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* a grid of suggested amounts in naira */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[100, 200, 500].map((suggestedAmount) => (
                <div
                  key={suggestedAmount}
                  className="bg-neutral-200 text-sm text-center py-2 rounded-lg"
                  onClick={() => setAmount(suggestedAmount)}
                >
                  ₦ {suggestedAmount}
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Purchase
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Airtime;
