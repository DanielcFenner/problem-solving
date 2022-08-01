/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let biggest = 0;
  for (let i = 0; i < sentences.length; i++) {
    let spaces = 1;

    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        spaces++;
      }
    }

    if (spaces > biggest) biggest = spaces;
  }
  return biggest;
};
