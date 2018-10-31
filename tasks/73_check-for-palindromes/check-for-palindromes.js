/* eslint "require-jsdoc": 0 */
export const palindrome = (str) => {
  let sentance;
  let reversedSentance;
  sentance = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  reversedSentance = sentance.split('').reverse().join('');
  return sentance === reversedSentance;
};
