/* eslint "require-jsdoc": 0 */
export const fatFingers = (str) => {
  return str.split('a').map((item, i) => {
    if (i % 2 === 1) {
      return item.toUpperCase();
    }
    return item;
  }).join('');
};
