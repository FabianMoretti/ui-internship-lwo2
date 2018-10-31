/* eslint "require-jsdoc": 0 */
export const unpackArray = (arr) => {
  let res = [];
  const pred = (item) => {
    if (Array.isArray(item)) {
      item.forEach(pred);
    } else {
      res.push(item);
    }
  };
  arr.forEach(pred);
  return res;
};
