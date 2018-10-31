/* eslint "require-jsdoc": 0 */
export const pairElement = (str) => {
  let res = [];
  let letterArr = str.split('');
  const _length = letterArr.length;
  for (let i = 0; i < _length; i++) {
    if (letterArr[i] === 'A') {
      res.push(['A', 'T']);
    }
    if (letterArr[i] === 'T') {
      res.push(['T', 'A']);
    }
    if (letterArr[i] === 'C') {
      res.push(['C', 'G']);
    }
    if (letterArr[i] === 'G') {
      res.push(['G', 'C']);
    }
  }
  return res;
};
