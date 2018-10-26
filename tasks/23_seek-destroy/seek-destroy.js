export const destroyer = (arr, ...args) => {
  return arr.filter((element) => {
    return args.indexOf(element) == -1;
  });
};
