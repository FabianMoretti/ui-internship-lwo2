/* eslint "require-jsdoc": 0 */
const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;
export function orbitalPeriod(arr) {
  let newArr = [];
  arr.forEach(function(element) {
    const t = (2 * Math.PI) * Math.sqrt(Math.pow(EARTH_RADIUS +
      element.avgAlt, 3) / GM);
    let res = {
      name: element.name,
      orbitalPeriod: Math.round(t),
    };
    newArr.push(res);
  });
  return newArr;
}
