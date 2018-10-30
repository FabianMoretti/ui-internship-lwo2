/* eslint "require-jsdoc": 0 */
export const findCloseIndex = (str, point) => {
  let arr = str.split('');
  let res = 0;
  if (arr[point] !== '(') {
    return -1;
  }
  for (let i = point; i < arr.length; i++) {
    if (arr[i] == '(') {
      res++;
    }
    if (arr[i] == ')') {
      res--;
    }
    if (res === 0) {
      return i;
    }
  }
};

