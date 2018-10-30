/* eslint "require-jsdoc": 0 */

export const humanizeFormat = (num) => {
  let strNum = num + '';
  let lastStrNum =strNum[strNum.length - 1];
  if (+lastStrNum === 1) return num +'st';
  if (+lastStrNum === 2) return num +'nd';
  if (+lastStrNum === 3) return num +'rd';
  if (+lastStrNum > 3) return num +'th';
  return '';
};
