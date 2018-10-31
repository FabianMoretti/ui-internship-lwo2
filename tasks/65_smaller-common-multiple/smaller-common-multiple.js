/* eslint "require-jsdoc": 0 */
export const smallestCommons = (nums) => {
  let numsArr = [];
  if (nums[0] < nums[1]) {
    let i = nums[0];
    while (i <= nums[1]) {
      numsArr.push(i);
      i++;
    }
  }
  if (nums[0] > nums[1]) {
    let viceVersa = nums[0];
    nums[0] = nums[1];
    nums[1] = viceVersa;
    let i = nums[0];
    while (i <= nums[1]) {
      numsArr.push(i);
      i++;
    }
  }
  let res = 1;
  while (res) {
    if (numsArr.every((element) => res % element === 0)) {
      return res;
    } else {
      res++;
    }
  }
};
