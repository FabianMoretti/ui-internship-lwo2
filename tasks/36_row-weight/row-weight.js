/* eslint "require-jsdoc": 0 */
export const rowWeights = (arr) => {
  arr.push(0);
  let odd = [];
  let even = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    i % 2 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd.reduce((a, b) => {
    return a + b;
  }), even.reduce((a, b) => {
    return a + b;
  })];
};
