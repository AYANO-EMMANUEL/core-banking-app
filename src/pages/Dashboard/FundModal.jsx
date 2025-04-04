import { useState } from 'react';
import NumericInput from '../Airtime/components/CurrencyInput';


const FundModal = ( {setOpen, amount, setAmount} ) => {
  const [amountToAdd, setAmountToAdd] = useState("");
  return (
    <div className=''>
      <h1 className="bold text-2xl pb-2">
        Fund Account
      </h1>
      <h3 className="py-1">Enter your desired amount</h3>
      <div className="relative">
        <NumericInput value={amountToAdd} setValue={setAmountToAdd} />
        <span className="absolute left-3 top-[50%] translate-y-[-40%]">
          ₦
        </span>
      </div>
      <button
        className={`bg-green-600 text-white rounded-xl flex justify-self-end p-3 mt-3 ${
          amountToAdd === '' ? 'bg-green-300 opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => {
          if (amountToAdd !== '') {
            setOpen(false);
            setAmount(amount + parseInt(amountToAdd.replace(/,/g, '')));
            return
          }


        }}
      >
        Add Funds
      </button>
    </div>
  );
};

export default FundModal;