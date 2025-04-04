import { useState } from "react";
import TransferForm from "./components/TransferForm";
import FeedbackMessage from "./components/FeedbackMessage";
import TransferFooter from "./components/TransferFooter";
import Modal from "../../components/Modal";
import { BsLightningFill } from "react-icons/bs";
import ExternalTransferForm from "./components/ExternalTrasferForm";

const ExternalTransfer = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleTransfer = async () => {
    setSuccessMessage("");
    setErrorMessage("");

    // Validate inputs
    if (!selectedBank || !amount || isNaN(amount) || Number(amount) <= 0) {
      setErrorMessage("Please provide a valid amount and bank details.");
      return;
    }

    // Simulate an API call with a promise
    try {
      const simulateApiCall = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) {
            // 90% chance of success
            resolve({ success: true });
          } else {
            // 10% chance of failure
            reject(new Error("Simulated API error"));
          }
        }, 1000); // Simulated network delay
      });

      const response = await simulateApiCall;

      if (!response.success) {
        setSelectedBank("");
        setMessage("");
        setAmount("");
        throw new Error("Failed to transfer money.");
        set
      }

      setSuccessMessage(
        `Successfully transferred ₦${amount} to JOHN BULL.`
      );
      setAmount("");
      setMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Modal>
      <div className="flex">
        <div className="max-w-full md:overflow-y-scroll mx-auto">
          <h1 className="text-3xl font-bold mb-1"><span className="text-green-800">Send to</span> Bank <span><BsLightningFill className="inline text-base text-green-800"/> </span></h1>

          <FeedbackMessage
            successMessage={successMessage}
            errorMessage={errorMessage}
          />

          <ExternalTransferForm
            selectedBank={selectedBank}
            setSelectedBank={setSelectedBank}
            amount={amount}
            setAmount={setAmount}
            message={message}
            setMessage={setMessage}
            handleTransfer={handleTransfer}
          />

          <TransferFooter />
        </div>
      </div>
    </Modal>
  );
};

export default ExternalTransfer;
