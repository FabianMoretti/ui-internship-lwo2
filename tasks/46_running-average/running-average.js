/* eslint "require-jsdoc": 0 */
export const runningAverage = () => {
  let arr =[];
  return function rAvg(numb) {
    arr.push(numb);
    return arr.reduce((a, b) => {
      return a + b;
    }) / arr.length;
  };
};
