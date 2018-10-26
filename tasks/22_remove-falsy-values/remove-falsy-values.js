export const removeFalsyValues = (arr) => {
  let result = [];
  arr.forEach(element => {
  if (element!==undefined && element!==NaN && element) result.push(element);
  });
  return result;
}
