/* eslint "require-jsdoc": 0 */
export const greatestCommonDivisor = (a, b) => {
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
};
