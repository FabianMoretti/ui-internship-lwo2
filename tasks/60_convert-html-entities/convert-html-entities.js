/* eslint "require-jsdoc": 0 */
export const convertHTML = (str) => {
  let res = str.split('');
  const _length = res.length;
  for (let i = 0; i < _length; i++) {
    if (res[i] === '<') {
      res[i] = '&lt;';
    }
    if (res[i] === '&') {
      res[i] = '&amp;';
    }
    if (res[i] === '>') {
      res[i] = '&gt;';
    }
    if (res[i] === '"') {
      res[i] = '&quot;';
    }
    if (res[i] === '\'') {
      res[i] = '&apos;';
    }
  }
  return res.join('');
};
