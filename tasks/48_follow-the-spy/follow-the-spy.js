/* eslint "require-jsdoc": 0 */
export const followTheSpy = (countriesArr) => {
  let currentPlace = [countriesArr[0][0], countriesArr[0][1]];
  const countriesArrLength = countriesArr.length;
  for (let i = 1; i < countriesArrLength; i++) {
    let nextCountry = countriesArr.filter((current) =>
      current[0] === currentPlace[i]);
    currentPlace.push(nextCountry[0][1]);
  }
  return currentPlace.join(', ');
};
