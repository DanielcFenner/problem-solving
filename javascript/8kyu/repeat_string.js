function repeatStr(n, s) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += s;
  }
  return newStr;
}

/* turns out there is a built in function for this:

function repeatStr (n, s) {
  return s.repeat(n);
}

*/
