import { useState } from "react";
import TransferForm from "./components/TransferForm";
import FeedbackMessage from "./components/FeedbackMessage";
import TransferFooter from "./components/TransferFooter";
import Modal from "../../components/MOdal";
import { BsLightningFill } from "react-icons/bs";

const CoreTransfer = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //   const handleTransfer = async () => {
  //     setSuccessMessage('');
  //     setErrorMessage('');

  //     // Validate inputs
  //     if (!recipientEmail || !amount || isNaN(amount) || Number(amount) <= 0) {
  //       setErrorMessage('Please provide a valid email and amount.');
  //       return;
  //     }

  //     // Simulate an API call
  //     try {
  //       const response = await fetch('/api/transfer', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({
  //           recipientEmail,
  //           amount: Number(amount),
  //           message,
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to transfer money.');
  //       }

  //       const data = await response.json();
  //       setSuccessMessage(`Successfully transferred $${amount} to ${recipientEmail}.`);
  //       setRecipientEmail('');
  //       setAmount('');
  //       setMessage('');
  //     } catch (error) {
  //       setErrorMessage(error.message);
  //     }
  //   };

  const handleTransfer = async () => {
    setSuccessMessage("");
    setErrorMessage("");

    // Validate inputs
    if (!recipientEmail || !amount || isNaN(amount) || Number(amount) <= 0) {
      setErrorMessage("Please provide a valid email and amount.");
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
        throw new Error("Failed to transfer money.");
      }

      setSuccessMessage(
        `Successfully transferred ₦${amount} to ${recipientEmail}.`
      );
      setRecipientEmail("");
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
          <h1 className="text-3xl font-bold mb-1"><span className="text-green-800">Core</span> Transfer <span><BsLightningFill className="inline text-base text-green-800"/> </span></h1>

          <FeedbackMessage
            successMessage={successMessage}
            errorMessage={errorMessage}
          />

          <TransferForm
            recipientEmail={recipientEmail}
            setRecipientEmail={setRecipientEmail}
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

export default CoreTransfer;
