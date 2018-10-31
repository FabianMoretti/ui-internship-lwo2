/* eslint "require-jsdoc": 0 */
export const sumPrimes = (num) => {
  const isPrime = (value) => {
    const _length = value / 2 + 1;
    for (let i = 2; i <= _length; i++) {
      if (value % i == 0 && i != value) return false;
    }
    return true;
  };
  let resArr = [];
  let i = 2;
  while (i <= num) {
    if (isPrime(i)) {
      resArr.push(i);
    }
    i++;
  }
  return resArr.reduce((a, b) => {
    return a + b;
  });
};

