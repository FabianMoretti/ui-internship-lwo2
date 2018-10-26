export const getIndexToInsert = (arr, value) => {
  const copy = [...arr];
  copy.push(value);
  copy.sort((a, b) => a - b);
  return copy.indexOf(value);
};
