function removeChar(str) {
  let new_string = "";
  for (let i = 1; i < str.length - 1; i++) {
    const element = str[i];
    new_string += element;
  }
  return new_string;
}

// Can use slice like string.slice(1, -1);
