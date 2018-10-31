/* eslint "require-jsdoc": 0 */
export const updateInventory = (arrCurr, arrNext) => {
  let allArr = arrCurr.concat(arrNext).reduce((current, next) => {
    if (current[next[1]]) {
      current[next[1]] += next[0];
    } else {
      current[next[1]] = next[0];
    }
    return current;
  }, {});
  return Object.keys(allArr).map((value) => {
    return [allArr[value], value];
  }).sort((a, b) => {
    return a[1] > b[1];
  });
};
