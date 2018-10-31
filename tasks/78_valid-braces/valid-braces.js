/* eslint "require-jsdoc": 0 */
export const validBraces = (str) => {
  let braceObj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const strLength = str.length;
  if (strLength === 2) {
    if (braceObj[str[0]] !== str[1]) {
      return false;
    } else {
      return true;
    }
  } else {
    for (let i = 0; i < strLength; i++) {
      if (braceObj[str[i]] === str[i + 1]) {
        const res = str.slice(0, i) + str.slice(i + 2);
        return validBraces(res);
      }
    }
    return false;
  }
};
