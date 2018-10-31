/* eslint "require-jsdoc": 0 */
export const traverseTree = function(tree, callback) {
  callback(tree);
  if (tree.children) {
    tree.children.forEach((item) => {
      traverseTree(item, callback);
    });
  }
};
