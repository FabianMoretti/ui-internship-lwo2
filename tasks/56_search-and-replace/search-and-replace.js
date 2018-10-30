/* eslint "require-jsdoc": 0 */
export const myReplace = (str, target, alter) => {
  const checkTarget = !/[A-Z]/.test(target[0]);
  return checkTarget ?
         str.replace(target, alter) :
         str.replace(target, alter[0].toUpperCase() +
         alter.substr(1, alter.length));
};

