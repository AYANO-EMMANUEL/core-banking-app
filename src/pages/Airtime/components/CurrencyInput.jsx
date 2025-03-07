import React, { useState } from 'react';
import { formatNumberWithCommas } from '../../../utilities/AirtimeCurrencyFormat';

const NumericInput = ({value, setValue}) => {


  const handleChange = (e) => {
    // const input = e.target.value;

    // // Remove all non-numeric characters except decimal point
    // const sanitized = input.replace(/[^0-9.]/g, '');

    // // Prevent multiple decimal points
    // const decimalCount = sanitized.split('.').length - 1;
    // if (decimalCount <= 1 && /^[0-9]*\.?[0-9]*$/.test(sanitized)) {
    //   // Format the number with commas
    //   const parts = sanitized.split('.');
    //   const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //   const formattedValue = parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart;
    //   setValue(formattedValue);
    // }
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