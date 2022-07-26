function removeExclamationMarks(s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    el = s[i];
    if (el !== "!") {
      newString += el;
    }
  }

  return newString;
}
