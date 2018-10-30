/* eslint "require-jsdoc": 0 */

export const confirmEnding = (str, target) => {
  return str.substr(-target.length)===target;
};
