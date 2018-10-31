/* eslint "require-jsdoc": 0 */
export const squares = (num) => {
  const res = [];
  let i = 1;
  while (i <= num) {
    if (i % 4 === 0) {
      res.push(i);
    }
    if (2 * i - 1 <= num) {
      res.push(2 * i - 1);
    }
    i++;
  }
  return res.length;
};
