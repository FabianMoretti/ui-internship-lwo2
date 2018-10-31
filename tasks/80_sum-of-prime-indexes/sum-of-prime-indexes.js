/* eslint "require-jsdoc": 0 */
export const sumPrimeIndexedElements = (arr) => {
  if (arr.length == 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 1; j--) {
      if (i == 2) {
        sum += arr[i];
        break;
      }
      if (i % j == 0) break;
      if (j == 2) sum += arr[i];
    }
  }
  return sum;
};
