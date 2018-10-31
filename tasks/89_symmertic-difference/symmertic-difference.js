/* eslint "require-jsdoc": 0 */
export function sym(...args) {
  let arrays = [].slice.call(args);
  const diff = (arr1, arr2) => {
    return arr1.filter((value) => {
      return !~arr2.indexOf(value);
    });
  };
  return arrays.reduce((accArr, curArr) => {
    return [].concat( diff(accArr, curArr), diff(curArr, accArr) )
        .filter((v, i, self) => {
          return self.indexOf(v) === i;
        });
  }).sort((a, b) => {
    return a > b;
  });
}
