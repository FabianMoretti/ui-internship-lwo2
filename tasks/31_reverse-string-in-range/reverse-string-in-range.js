/* eslint "require-jsdoc": 0 */
export const reverseStringInRange = (str, arr) => {
  const copy = str.slice().split('');
  const substr = str.split('').slice(arr[0], arr[1] + 1).reverse().join('');
  copy.splice(arr[0], substr.length, substr);
  return copy.join('');
};
