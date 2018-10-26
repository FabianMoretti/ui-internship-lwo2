export const checkLetters = (arr) => {
  let check = true;
  let firstArr = arr[0].toLowerCase();
  let secondArr = arr[1].toLowerCase().split('');
  secondArr.every((element) => {
    if (firstArr.indexOf(element) === -1) {
      check = false;
    }
    return check;
  });
  return check;
};
