/* eslint "require-jsdoc": 0 */
export const maxProduct = (arr) => {
  const res = [];
  const mainArr = arr.concat();
  mainArr.forEach((element, index) => {
    let count = index + 1;
    while (count < arr.length) {
      return res.push(element * mainArr[count]);
    }
  });
  return Math.max.apply(null, res);
};
