/* eslint "require-jsdoc": 0 */
export const swapCases = (str) => {
  let res = '';
  const strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    let char = str.charAt(i);
    if (char.toUpperCase() === char) {
      res += char.toLowerCase();
    } else {
      res += char.toUpperCase();
    }
  }
  return res + '';
};
