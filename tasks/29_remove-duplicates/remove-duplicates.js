export const removeDuplicates = (str) => {
  let uniqueArray = str.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  });
  return uniqueArray;
};
