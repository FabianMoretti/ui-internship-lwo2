/* eslint "require-jsdoc": 0 */
export const dropElements = (arr, func) => {
  let end;
  const arrLength = arr.length;
  for (let i = 0; i <= arrLength; i++) {
    if (func(arr[i]) === true) {
      end = i;
      return arr.slice(end);
    }
  }
  return [];
};
