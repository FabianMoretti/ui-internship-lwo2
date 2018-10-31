/* eslint "require-jsdoc": 0 */
export const binaryDecode = (str) => {
  let convertBinaryToString;
  let deleteSpaces;
  if (!str) {
    str = '';
  }
  convertBinaryToString = str.replace(/[01]{8}/g, (element) => {
    return String.fromCharCode(parseInt(element, 2));
  });
  deleteSpaces = convertBinaryToString.split('  ');
  const deleteSpacesLength = deleteSpaces.length;
  for (let i = 0; i < deleteSpacesLength; i++) {
    if (deleteSpaces[i]) {
      deleteSpaces[i] = deleteSpaces[i].replace(/\s/g, '');
    }
  }
  return deleteSpaces.join(' ');
};
