/* eslint "require-jsdoc": 0 */

export function factorialize(n) {
  let f = [];
  if (n == 0 || n == 1) {
    return 1;
  }
  if (f[n] > 0) {
    return f[n];
  }
  return f[n] = factorialize(n-1) * n;
}

