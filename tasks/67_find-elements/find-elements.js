/* eslint "require-jsdoc": 0 */
export const findElement = (arr, func) => {
  let res = arr.filter((current) => func(current));
  if (res === arr) {
    return undefined;
  }
  return res[0];
};
