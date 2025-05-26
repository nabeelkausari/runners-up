/**
 * Formats a number or string as Indian Rupees (INR)
 * @param amount The amount to format (number or string)
 * @returns Formatted currency string with ₹ symbol
 */
export const formatINR = (amount: number | string): string => {
  // Convert string to number if needed
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // Check if the conversion resulted in a valid number
  if (isNaN(numAmount)) {
    return '₹0.00';
  }
  
  // Format the number with 2 decimal places and thousand separators
  return `₹${numAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

export default formatINR;
