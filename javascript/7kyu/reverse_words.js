function reverseWords(str) {
  let splitArray = str.split(" ");
  let newArray = [];

  for (let i = 0; i < splitArray.length; i++) {
    let word = splitArray[i];

    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      newWord += char;
    }
    newArray.push(newWord);
  }

  return newArray.join(" ");
}

function reverseWordsTwo(str) {
  let newArray = [];

  let newWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];

    if (char === " ") {
      newArray.unshift(newWord);
      newWord = "";
    } else {
      newWord += char;
    }
  }

  if (newWord !== "") newArray.unshift(newWord);

  return newArray.join(" ");
}
