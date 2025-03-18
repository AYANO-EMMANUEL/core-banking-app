import React, { useState } from 'react';

const PhoneNumberInput = ({phoneNumber, setPhoneNumber, error, setError}) => {
  // Valid prefixes
  const validPrefixes = ['081', '080', '090', '091', '070'];

  const handleChange = (e) => {
    const input = e.target.value;

    // Remove all non-digit characters
    const digitsOnly = input.replace(/\D/g, '');

    // Validate length
    if (digitsOnly.length > 11) {
      setError('Phone number must be 11 digits maximum.');
      setPhoneNumber(input.slice(0, 11)); // Truncate to 11 digits
      return;
    }

    // Validate prefix
    const prefix = digitsOnly.slice(0, 3);
    if (digitsOnly.length >= 3 && !validPrefixes.includes(prefix)) {
      setError('Invalid phone number prefix. Must start with 081, 080, 090, 091, or 070.');
    } else {
      setError('');
    }

    // Format the phone number
    let formattedNumber = '';
    if (digitsOnly.length > 0) {
      formattedNumber = digitsOnly.slice(0, 4);
      if (digitsOnly.length > 4) {
        formattedNumber += ' ' + digitsOnly.slice(4, 7);
      }
      if (digitsOnly.length > 7) {
        formattedNumber += ' ' + digitsOnly.slice(7, 11);
      }
    }

    // Update state
    setPhoneNumber(formattedNumber);
  };

  return (
    <div>
      <input
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="Enter phone number (e.g., 0812 345 6789)"
        style={{ padding: '8px', fontSize: '16px', width: '100%' }}
      />
      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;