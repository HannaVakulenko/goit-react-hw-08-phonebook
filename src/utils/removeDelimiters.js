export const removeDelimiters = number => {
  const cleanedNumber = number.replace(/[()-]/g, '');

  return cleanedNumber;
};
