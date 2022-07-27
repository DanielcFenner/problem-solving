// function isPangram(string) {
//   const alphabet = "qwertyuiopasdfghjklzxcvbnm";
//   let alphaObj = {};

//   for (let i = 0; i < alphabet.length; i++) {
//     let char = alphabet[i];
//     alphaObj[char] = 0;
//   }

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i].toLowerCase();
//     alphaObj[char]++;
//   }

//   for (let i = 0; i < alphabet.length; i++) {
//     let char = alphabet[i];
//     if (alphaObj[char] === 0) {
//       return false;
//     }
//   }

//   return true;
// }

function isPangram(string) {
  const stringLower = string.toLowerCase();
  const alphabet = "qwertyuiopasdijklzxcim";

  for (let i = 0; i < alphabet.length; i++) {
    const alphaChar = alphabet[i];

    counter = 0;
    for (let j = 0; j < stringLower.length; j++) {
      const stringChar = stringLower[j];
      if (stringChar === alphaChar) {
        counter++;
      }
    }

    if (counter === 0) {
      return false;
    }
  }

  return true;
}
