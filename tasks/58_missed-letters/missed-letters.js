/* eslint "require-jsdoc": 0 */
export const findLetter = (str) => {
  let res;
  const _length = str.length - 1;
  for (let i = 0; i < _length; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(i + 1) - 1) {
      res = String.fromCharCode(str.charCodeAt(i) +1);
    }
  }
  return res;
};
