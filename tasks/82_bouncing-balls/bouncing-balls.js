/* eslint "require-jsdoc": 0 */
export const bouncingBall = (h, bounce, window) => {
  let res = 0;
  if (h < 0 || bounce < 0 || bounce > 1 || window > h) {
    return -1;
  }
  while (h > window) {
    h *= bounce;
    res += 2;
  }
  return res-1;
};
