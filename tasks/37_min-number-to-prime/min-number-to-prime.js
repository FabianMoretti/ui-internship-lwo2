/* eslint "require-jsdoc": 0 */
export const minNumberToPrime = (arr) => {
  const arrSum = arr.reduce((a, b) => {
    return a + b;
  });
  const isPrime = (value) => {
    for (let i = 2; i <= value / 2 + 1; i++) {
      if (value % i === 0 && i !== value) return false;
    }
    return true;
  };
  const smallerPrime = (value) => {
    let step = 0;
    while (!isPrime(value + step)) {
      step++;
    }
    return step;
  };
  return smallerPrime(arrSum);
};
