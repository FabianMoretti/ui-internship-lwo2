/* eslint "require-jsdoc": 0 */
export const truncateArray = (arr, size) => {
  arr.splice(0, size);
  return arr;
};
