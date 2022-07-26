function descendingOrder(n) {
  let string = n.toString();
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    const el = string[i];

    arr.push(parseInt(el));
  }

  arr.sort((a, b) => b - a);
  let arrJoined = arr.join("");
  return parseInt(arrJoined);
}

// function to rearrange digits into highest possible number
// function descendingOrder(n) {
//   return parseInt(n.toString().split("").sort().reverse().join(""));
// }
