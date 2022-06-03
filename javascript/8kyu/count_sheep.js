var countSheep = function (num) {
  let newString = "";
  for (let i = 1; i < num + 1; i++) {
    newString += `${i} sheep...`;
  }
  return newString;
};
