function getSum(a, b) {
  // if numbers are equal just return them
  if (a === b) return a;

  // swap if a is bigger than b
  if (a > b) [a, b] = [b, a];

  // add sum of all numbers between a and b
  let sum = a;

  for (let i = a + 1; i < b + 1; i++) {
    sum += i;
  }

  return sum;
}
