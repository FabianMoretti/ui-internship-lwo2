/* eslint "require-jsdoc": 0 */
export const findFriend = (line) => {
  let counter = 0;
  const _length = line.length;
  for (let i = 0; i < _length; i++) {
    if ((line[i] === 'blue') && (line[i + 1] === 'blue') &&
    (line[i + 2] === 'red')) {
      counter ++;
    }
    if ((line[i] === 'red') && (line[i + 1] === 'blue') &&
     (line[i + 2] === 'blue')) {
      counter++;
    }
  }
  return counter;
};
