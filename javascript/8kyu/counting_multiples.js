function countBy(x, n) {
  let z = [];

  let number = x;
  for (let i = 0; i < n; i++) {
    z.push(number);
    number += x;
  }

  return z;
}
