/* eslint "require-jsdoc": 0 */

export const findLongestWord = (str) => {
  let strSplit = str.split(' ');
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
};
