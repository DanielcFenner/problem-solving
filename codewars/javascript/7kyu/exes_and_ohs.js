function XO(str) {
  let exes = 0;
  let ohs = 0;

  // count x's and o's in string
  for (let i = 0; i < str.length; i++) {
    letter = str[i].toLowerCase();
    if (letter === "x") exes++;
    else if (letter === "o") ohs++;
  }

  // true if there are the same amount of x's and o's
  if (exes === ohs) return true;
  else return false;
}
