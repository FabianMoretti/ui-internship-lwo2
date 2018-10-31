/* eslint "require-jsdoc": 0 */
export const binaryEncode = (string) => {
  if (!string) {
    string = '';
  }
  return string.split('').map((char) => {
    const binNum = char.charCodeAt(0).toString(2);
    if (binNum.length === 6) {
      return '00' + binNum;
    }
    if (binNum.length === 7) {
      return '0' + binNum;
    }
  }).join(' ');
};
