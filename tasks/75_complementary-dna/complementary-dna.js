/* eslint "require-jsdoc": 0 */
export const DNAStrand = (str) => {
  return str.split('').map((element) => {
    if (element == 'A') {
      return element = 'T';
    }
    if (element == 'T') {
      return element = 'A';
    }
    if (element == 'G') {
      return element = 'C';
    }
    if (element == 'C') {
      return element = 'G';
    }
  }).join('');
};
