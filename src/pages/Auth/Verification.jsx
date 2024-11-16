import { useState, useEffect } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(5).fill(''));
  const [isComplete, setIsComplete] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
   
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      setIsResendEnabled(true);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    const value = element.value;

    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

     
      if (value && index < otp.length - 1) {
        element.nextSibling.focus();
      }

     
      if (!value && index > 0) {
        element.previousSibling.focus();
      }

     
      setIsComplete(newOtp.every((digit) => digit !== ''));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isComplete) {
      console.log("OTP Submitted:", otp.join(''));
     
    }
  };

  const handleResendOTP = () => {
    setTimer(30);
    setIsResendEnabled(false);
    setOtp(new Array(5).fill(''));
    console.log("OTP Resent");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      <h1 className="font-bold text-2xl absolute top-5 left-6">core.</h1>
      <h1 className="text-3xl font-bold text-black mb-6">Verify OTP</h1>
      <p className="text-lg text-gray-600 mb-6">Please enter the OTP sent to your email address.</p>

      <form onSubmit={handleSubmit} className="mb-6 flex flex-col justify-center">
        <div className="flex space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              className={`sm:w-[64px] sm:h-[64px] w-[50px] h-[50px] text-center text-lg border-2 transition duration-300 ${digit ? 'border-green-400' : 'border-gray-300'
                } rounded-md focus:border-2 focus:border-green-500 focus:outline-none`}
            />
          ))}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-400 cursor-pointer text-white mt-4 py-3 px-4 rounded-md hover:bg-green-300 w-full transition duration-300"
          disabled={!isComplete}
        >
          Verify OTP
        </button>
      </form>

      {timer > 0 ? (
        <p className="text-gray-600">Resend OTP in {timer} seconds</p>
      ) : (
        <span>
          Didn't receive a code? {" "}
          <button
            onClick={handleResendOTP}
            className={`font-bold cursor-pointer ${isResendEnabled ? 'text-green-300' : 'text-gray-500 cursor-not-allowed'
              } underline`}
            disabled={!isResendEnabled}
          >
            Resend OTP
          </button>
        </span>
      )}
    </div>
  );
};

export default OTPVerification;
