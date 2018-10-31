/* eslint "require-jsdoc": 0 */
export const maxTripletSum = (arr) => {
  const uniqueArr = arr.reduce((unique, current) => {
    if (!unique.includes(current)) {
      unique.push(current);
    }
    return unique;
  }, []);
  uniqueArr.sort((a, b) => {
    return b - a;
  });
  return uniqueArr[0] + uniqueArr[1] + uniqueArr[2];
};
