/* eslint "require-jsdoc": 0 */

export const arrayChunks = (mainArr, size) => {
  let result = [];
  let i = 0;
  let n = mainArr.length;
  while (i < n) {
    result.push(mainArr.slice(i, i += size));
  }
  return result;
};
