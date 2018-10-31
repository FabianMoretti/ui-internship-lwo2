/* eslint "require-jsdoc": 0 */
export const sumFibs = (num) => {
  let f0 = 1;
  let f1 = 1;
  let res = 0;

  if (f0 <= num) {
    res += f0;
  }

  if (f1 <= num) {
    res += f1;
  }
  while (res) {
    let nextFib = f0 + f1;
    f0 = f1;
    f1 = nextFib;
    if (f1 <= num) {
      if (f1 % 2 === 1) {
        res += f1;
      }
    } else {
      break;
    }
  }
  return res;
};
