function printerError(s) {
  let printer = "abcdefghijklm";
  let errors = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!printer.includes(letter)) errors++;
  }

  return errors + "/" + s.length;
}
