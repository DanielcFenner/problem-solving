function longestConsec(strarr, k) {
  let biggestLength = 0;
  let biggestString = "";
  let string = "";

  for (let i = 0; i < strarr.length - k + 1; i++) {
    string = "";
    for (let j = 0; j < k; j++) {
      const element = strarr[i + j];
      console.log(element);
      string += element;
    }
    if (string.length > biggestLength) {
      biggestLength = string.length;
      biggestString = string;
    }
  }

  return biggestString;
}
