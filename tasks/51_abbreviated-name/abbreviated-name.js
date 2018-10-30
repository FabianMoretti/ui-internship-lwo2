/* eslint "require-jsdoc": 0 */
export const abbreviated = (str) => {
  return str.split(/\s+/).map((word, i) =>
  i === 0 ? word : word[0].toUpperCase() + '.' ).join(' ');
};

