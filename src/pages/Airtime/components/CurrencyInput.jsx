import React, { useState } from 'react';
import { formatNumberWithCommas } from '../../../utilities/AirtimeCurrencyFormat';

const NumericInput = ({value, setValue}) => {


  const handleChange = (e) => {
    setValue(formatNumberWithCommas(e.target.value));
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      inputMode="decimal"
      className="w-full p-2 ps-7 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
};

export default NumericInput;