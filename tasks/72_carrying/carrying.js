/* eslint 'require-jsdoc': 0 */
export const addTogether = (a, b) => {
  if (a && (typeof (a) !== 'number' || typeof (a) === 'string')) {
    return;
  }

  if (b && (typeof (b) !== 'number' || typeof (b) === 'string')) {
    return;
  }

  if (!b) {
    return (num) => {
      if (num && (typeof (num) !== 'number' || typeof (num) === 'string')) {
        return;
      }
      return a + num;
    };
  } else {
    return a + b;
  }
};
