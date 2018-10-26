export const peopleInBus = (arr) => {
  let inside = 0;
  let outside = 0;
  for (let i = 0; i < arr.length; i++) {
    inside += arr[i][0];
  }
  for (let i = 0; i < arr.length; i++) {
    outside += arr[i][1];
  }
  return inside - outside;
};
