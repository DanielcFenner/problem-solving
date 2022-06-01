function high(x) {
  let wordsArray = x.split(" ");
  let highestScoreWord = "";
  let highestScore = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    let wordScore = wordScoreCalc(word);
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestScoreWord = word;
    }
  }
  return highestScoreWord;
}

function wordScoreCalc(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    score += letter.charCodeAt(0) - 96;
  }
  return score;
}
