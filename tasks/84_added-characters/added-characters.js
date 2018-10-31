/* eslint "require-jsdoc": 0 */
export const addedChar = (string1, string2) => {
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return string2[i];
    }
  }
  return string2[string2.length - 1];
};
