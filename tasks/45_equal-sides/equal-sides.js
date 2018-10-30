/* eslint "require-jsdoc": 0 */
export const findEqualIndex = (arr) => {
  let arrLeftCopy = arr.concat();
  let arrRightCopy = arr.concat();
  let leftSum;
  let rightSum;
  for (let i = 0; i < arr.length; i++) {
    leftSum = arrLeftCopy.slice(0, i+1).reduce((a, b) => {
      return a + b;
    });
    rightSum = arrRightCopy.slice(i, arr.length+1 ).reduce((a, b) => {
      return a + b;
    });
    if (leftSum === rightSum) {
      return i;
    }
    if (i === arr.length - 1) {
      return -1;
    }
  }
};
