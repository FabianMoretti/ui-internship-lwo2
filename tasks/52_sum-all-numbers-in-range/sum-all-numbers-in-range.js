/* eslint "require-jsdoc": 0 */
export const sumAll = (arr) => {
  return (arr[0] + arr[1]) * (Math.max(...arr) - Math.min(...arr) + 1) / 2;
};
