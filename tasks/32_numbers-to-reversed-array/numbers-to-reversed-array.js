/* eslint "require-jsdoc": 0 */
export const numberToReversedArray = (numb) => {
  return (numb + '').split('').reverse().map(Number);
};
