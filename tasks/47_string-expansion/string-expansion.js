/* eslint "require-jsdoc": 0 */
export const stringExpansion = (str) => {
  let res = '';
  let arr = str.split('');
  let multiplier = 1;
  const _length = arr.length;
  for (let i = 0; i < _length; i++) {
    if (+arr[i]) {
      multiplier = +arr[i];
    } else {
      res += arr[i].repeat(multiplier);
    }
  }
  return res;
};
