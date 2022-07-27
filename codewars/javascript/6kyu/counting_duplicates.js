function duplicateCount(text) {
  let object = {};
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let element = text[i].toLowerCase();

    if (object[element] === undefined) {
      object[element] = 1;
    } else {
      object[element]++;
      if (object[element] === 2) {
        count++;
      }
    }
  }
  return count;
}
