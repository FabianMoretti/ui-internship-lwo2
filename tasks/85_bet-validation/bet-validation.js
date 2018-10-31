/* eslint "require-jsdoc": 0 */
/* eslint-disable-next-line */
export const validate_bet = ([count, max], str) => {
  let str1 = str.split(/,| /);
  str1 = str1.filter((item) => item !== '');
  for (let i = 0; i < str1.length; i++) {
    if (isNaN(+str1[i])) {
      return 'None';
    }
  }
  str1.forEach((el) => {
    if (isNaN(el)) {
      return 'None';
    }
  });
  str1 = str1.map((item) => +item);
  if (str1.length !== count) {
    return 'None';
  }
  if (Math.max(...str1) > max) {
    return 'None';
  }
  return str1.sort((a, b) => a - b);
};
