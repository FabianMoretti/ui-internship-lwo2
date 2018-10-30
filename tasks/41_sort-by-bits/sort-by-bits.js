/* eslint "require-jsdoc": 0 */
export const sortByBits = (arr) => {
  return arr.sort((a, b) => {
    const firstNum = +(a).toString(2).split('').reduce((a, b) => {
      return +a+ +b;
    });
    const secondNum = +(b).toString(2).split('').reduce((a, b) => {
      return +a+ +b;
    });
    if (firstNum === secondNum) {
      return a - b;
    } else {
      return firstNum - secondNum;
    }
  });
};
