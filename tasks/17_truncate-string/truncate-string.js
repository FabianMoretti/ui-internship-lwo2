/* eslint "require-jsdoc": 0 */

export const truncateString = (str, n) => {
  if (n>=str.length) return str;
  if (n>3) return str.slice(0, n-3) + '...';
  return str.slice(0, n) + '...';
};
