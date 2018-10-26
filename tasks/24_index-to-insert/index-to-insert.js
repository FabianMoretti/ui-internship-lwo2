export const getIndexToInsert = (arr, value) => {
  arr.push(value);
  arr.sort( (a, b) => {return a - b});
  return arr.indexOf(value);
}