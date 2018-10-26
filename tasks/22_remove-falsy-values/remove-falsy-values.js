export const removeFalsyValues = (arr) => {
  let result = [];
  arr.forEach((element) => {
    if (element) {
      result.push(element);
    }
  });
  return result;
};
