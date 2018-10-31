/* eslint "require-jsdoc": 0 */
export const findMissing = (arr) => {
  const arrLength = arr.length;
  let d = (arr[arrLength - 1] - arr[0]) / ((arrLength + 1) - 1);
  for (let i = 0; i < arrLength - 1; i++) {
    if (arr[i] + d == arr[i + 1]) continue;
    return arr[i] + d;
  }
};
