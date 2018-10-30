/* eslint "require-jsdoc": 0 */
export const firstNSmallest = (arr, numb) => {
  let res = arr.map(function(elem, index) {
    return {
      value: elem,
      index: index,
    };
  });
  res = res.sort((a, b) => a.value - b.value );
  res = res.slice(0, numb);
  res = res.sort((a, b) => a.index - b.index);
  return res.map((elem) => elem.value);
};
