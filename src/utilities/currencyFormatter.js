export const formatToTwoDecimalPlaces = (value) => {
    if (!value) return ""; // Return empty string for empty input
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? value : numericValue.toFixed(2);
  };


