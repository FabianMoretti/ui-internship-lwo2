/* eslint "require-jsdoc": 0 */

export function getNumbers(str) {
  const regex = /[0-9]/g;
  let result = str.match(regex);
  let resArr = result.map((elem) => {
    return Number(elem);
  });
  return resArr;
}
