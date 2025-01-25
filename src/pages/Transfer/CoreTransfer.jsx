import { useState } from "react";
import TransferForm from "./components/TransferForm";
import FeedbackMessage from "./components/FeedbackMessage";
import TransferFooter from "./components/TransferFooter";

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
    <div className="min-h-screen md:h-screen flex md:overflow-y-hidden">
      <div className="max-w-full h-full p-6 lg:p-10 flex-[1.3] md:overflow-y-scroll">
        <h1 className="text-3xl font-bold mt-4">Money Transfer</h1>

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
      <div className="hidden lg:block w-[40vw] h-screen flex-[1] text-red-500">
        {/* ILLUSTRATION */}
      </div>
    </div>
  );
};

export default CoreTransfer;
