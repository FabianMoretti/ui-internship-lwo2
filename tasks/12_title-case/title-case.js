/* eslint "require-jsdoc": 0 */

export const titleCase = (str) => {
  let lowStr = str.toLowerCase();
  let lowArr = lowStr.split(' ');
  let resArr = [];
  let lowArrLength = lowArr.length;
  for (let i = 0; i < lowArrLength; i++) {
    resArr.push(lowArr[i][0].toUpperCase() +
    lowArr[i].slice(1, lowArr[i].length));
  }
  return resArr.join(' ');
};
