/* eslint "require-jsdoc": 0 */
export const telephoneCheck = (str) => {
  let types = {
    type1: /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}/,
    type2: /[0-9]{10}$/,
    type3: /^[1][ ][0-9]{3}[-][0-9]{3}[-][0-9]{4}/,
    type4: /^[1][ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{4}/,
    type5: /^[1][ ][(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}/,
    type6: /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/,
    type7: /^[(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}/,
    type8: /^[1][(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/,
  };
  /* eslint-disable-next-line */
  for (let value in types) {
    if (types['type2'].test(str) && str.length !== 10) return false;
    if (types[value].test(str)) return true;
  }
  return false;
};
