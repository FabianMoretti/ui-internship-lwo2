/* eslint "require-jsdoc": 0 */
export const insert = (str, text, i = 0) => {
  if (!text) return str;
  let strArr = str.split('');
  strArr.splice(i, 0, text);
  return strArr.join('');
};
