/* eslint "require-jsdoc": 0 */
export const translatePigLatin = (str) => {
  let res = '';
  let target = /[aeiou]/gi;
  if (str[0].match(target)) {
    res = str + 'way';
  } else {
    let vovels = str.indexOf(str.match(target)[0]);
    res = str.substr(vovels) + str.substr(0, vovels) + 'ay';
  }
  return res;
};
