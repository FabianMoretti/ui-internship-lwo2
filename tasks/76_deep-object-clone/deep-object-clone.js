/* eslint "require-jsdoc": 0 */
export const deepClone = (obj) => {
  let res = {};
  Object.keys(obj).forEach((key) => {
    if (typeof (obj[key]) === 'object') {
      res[key] = deepClone(obj[key]);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
};
