/* eslint "require-jsdoc": 0 */
export const pairwise = (arr, expect) => {
  if (!arr.length) {
    return 0;
  }
  let res = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] + arr[j] === expect) {
        if (res.includes(i) || res.includes(j)) {
          continue;
        }
        res.push(i, j);
      }
    }
  }
  return res.reduce((a, b) => a + b);
};
