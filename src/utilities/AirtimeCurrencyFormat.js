export const formatNumberWithCommas = (amount) => {
    // Convert the input to a string (in case it's a number)
    const amountStr = String(amount);
  
    // Remove all non-numeric characters except decimal point
    const sanitized = amountStr.replace(/[^0-9]/g, '');
  
    // Prevent multiple decimal points
    if (!/^[0-9]*\.?[0-9]*$/.test(sanitized)) {
      throw new Error('Invalid input: Input must be a valid number.');
    }
  
    // Split into integer and decimal parts
    const parts = sanitized.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const decimalPart = parts.length > 1 ? `.${parts[1]}` : '';
  
    // Combine the formatted integer and decimal parts
    return `${integerPart}${decimalPart}`;
  };