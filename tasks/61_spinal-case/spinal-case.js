/* eslint "require-jsdoc": 0 */
export const spinalCase = (str) => {
  return str.split(/\s|_|(?=[A-Z])/).map((word) => word[0].toLowerCase() +
   word.substring(1) + '-').join('').slice(0, -1);
};
