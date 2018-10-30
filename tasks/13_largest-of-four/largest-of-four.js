/* eslint "require-jsdoc": 0 */

export const largestOfFour = (bigArr) => {
  let maxArr = [];
  for (let i = 0; i < bigArr.length; i++) {
    maxArr.push(Math.max.apply(null, bigArr[i]));
  }
  return maxArr;
};
