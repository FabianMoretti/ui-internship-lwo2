/* eslint "require-jsdoc": 0 */
export const arrayPlusArray = (arr1, arr2) => {
  let resArr = [];
  if (arr1.length>=arr2.length) {
    arr2.push(0);
    resArr = arr1.map((value, index) => {
      return value + arr2[index];
    });
    return resArr;
  } else {
    arr1.push(0);
    resArr = arr1.map((value, index) => {
      return value + arr2[index];
    });
    return resArr;
  }
};
