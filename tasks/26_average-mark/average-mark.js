export const getAverage = (arr) => {
  let result = arr.reduce((sum, current) => {
    return sum + current;
  });
  return Math.floor(result / arr.length);
};
