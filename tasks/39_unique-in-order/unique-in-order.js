/* eslint "require-jsdoc": 0 */
export const uniqueInOrder = (arr) => {
  let res = [];
  if (typeof arr === 'string') {
    let stringArr = arr.split('');
    const strLength = stringArr.length;
    if (strLength > 1) {
      for (let i = 0; i < strLength; i++) {
        if (stringArr[i] !== stringArr[i+1]) {
          res.push(stringArr[i]);
        }
      }
    }
    return res;
  }
  const arrLength = arr.length;
  if (typeof arr[0] === 'number') {
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] !== arr[i+1]) {
        res.push(arr[i]);
      }
    }
    return res;
  }
  if (typeof arr === 'object') {
    if (arrLength === 1) {
      res.push(arr[0]);
      return res;
    }
    return [];
  }
};
