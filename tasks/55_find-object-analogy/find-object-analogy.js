/* eslint "require-jsdoc": 0 */
export const whatIsInAName = (collection, source) => {
  let res = [];
  let keys = Object.keys(source);
  res = collection.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return res;
};
