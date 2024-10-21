import React, { useState, useEffect } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);  // Resend timer starts at 30 seconds
  const [canResend, setCanResend] = useState(false);  // Control if the resend button is enabled

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);  // Cleanup interval on unmount
    } else {
      setCanResend(true);  // Allow resending when timer reaches 0
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(30);  // Reset the timer
    setCanResend(false);  // Disable resending while the timer is running
    // Logic to resend OTP goes here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to verify OTP
    console.log("OTP Submitted:", otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black mb-6">Verify OTP</h1>
        <p className="text-lg text-gray-600 mb-6">
          Please enter the OTP sent to your <strong>ayodejiola@gmail.com</strong>.
        </p>

        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="text-center text-lg tracking-widest w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />

          <button
            type="submit"
            className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-300 mt-4 w-full transition duration-300"
          >
            Verify OTP
          </button>
        </form>

        <div className="bg-gray-100 text-black py-4 px-6 rounded-lg inline-block shadow">
          {canResend ? (
            <button
              onClick={handleResend}
              className="bg-black text-white text-sm py-2 px-4 rounded-md hover:bg-neutral-900 transition"
            >
              Resend OTP
            </button>
          ) : (
            <p className="tex">
              Resend available in <span className="font-bold">{timer}</span> seconds
            </p>
          )}
        </div>

        <div className="mt-6">
          <p className="text-gray-600 text-sm">Didn’t receive the OTP? Try resending after the timer runs out.</p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
