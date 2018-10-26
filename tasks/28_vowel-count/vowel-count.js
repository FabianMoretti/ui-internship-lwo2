export const getVowelCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'a' ||
        str[i].toLowerCase() == 'i' ||
        str[i].toLowerCase() == 'o' ||
        str[i].toLowerCase() == 'e' ||
        str[i].toLowerCase() == 'u') {
      count += 1;
    }
  }
  return count;
};
