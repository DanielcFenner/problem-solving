function countSmileys(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const smileyString = arr[i];

    if (
      smileyString.length === 2 &&
      (smileyString[0] === ":" || smileyString[0] === ";") &&
      (smileyString[1] === ")" || smileyString[1] === "D")
    ) {
      count++;
    } else if (
      smileyString.length === 3 &&
      (smileyString[0] === ":" || smileyString[0] === ";") &&
      (smileyString[1] === "-" || smileyString[1] === "~") &&
      (smileyString[2] === ")" || smileyString[2] === "D")
    ) {
      count++;
    }
  }
  return count;
}
