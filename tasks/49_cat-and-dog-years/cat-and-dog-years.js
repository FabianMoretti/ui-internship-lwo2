/* eslint "require-jsdoc": 0 */
export const humanYearsCatYearsDogYears = (humanAge) => {
  let catAge;
  let dogAge;
  const dogFirst = 15;
  const dogSecond = 9;
  const dogNext = 5;
  const catFirst = 15;
  const catSecond = 9;
  const catNext = 4;
  if (humanAge === 1) {
    catAge = catFirst;
    dogAge = dogFirst;
  }
  if (humanAge === 2) {
    catAge = catFirst + catSecond;
    dogAge = dogFirst + dogSecond;
  }
  if (humanAge > 2) {
    catAge = catFirst + (catNext * humanAge) + 1;
    dogAge = dogFirst + (dogNext * humanAge) - 1;
  }
  return [humanAge, catAge, dogAge];
};
