/* eslint "require-jsdoc": 0 */
/* eslint-disable-next-line */
String.prototype.camelCase = function() {
  return this.split(/\s+/).map((word) =>
    word[0].toUpperCase() + word.substring(1)).join('');
};

