/* eslint "require-jsdoc": 0 */
export const diffArray = (arr1, arr2) => {
  let filteredArr2 = arr2.filter((element) => {
    return arr1.indexOf(element) === -1;
  });
  let filteredArr1 = arr1.filter((element) => {
    return arr2.indexOf(element) === -1;
  });
  return filteredArr1.concat(filteredArr2);
};
