/* eslint "require-jsdoc": 0 */
export const numPrimorial = (num) => {
  let primeArr = [];
  let res;
  const isPrime = (value) => {
    for (let i = 2; i <= value/2 + 1; i++) {
      if (value % i == 0 && i != value) return false;
    }
    return true;
  };

  let i = 2;
  while (primeArr.length < num) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
    i++;
  }
  res = primeArr.reduce((a, b) => {
    return a * b;
  });
  return res;
};
