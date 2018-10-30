/* eslint-disable */
export const uniteUnique = (arr, ...args) => {
  let mainArr = arr.concat(...args);
  let res = [];
  let set = new Set(mainArr);
  set.forEach((value) => {
    return res.push(value);
  });
  return res;
};
