/* eslint "require-jsdoc": 0 */

export const repeatStringNumTimes = (str, counter) => {
  let res = '';
  for (let i = 0; i < counter; i++) {
    res+=str;
  }
  return res;
};
