function disemvowel(str) {
  let new_string = "";
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (vowels.includes(letter.toLowerCase())) continue;
    else new_string += letter;
  }

  return new_string;
}
