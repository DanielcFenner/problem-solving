/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let elementsToPermute = [];
  let c = [];
  for (let i = 0; i < m - 1; i++) {
    elementsToPermute.push(true);
    c.push(0);
  }
  for (let i = 0; i < n - 1; i++) {
    elementsToPermute.push(false);
    c.push(0);
  }

  let generatedPermutations = [];
  let length = elementsToPermute.length;
  let i = 0;

  while (i < length) {
    if (c[i] < i) {
      if (i % 2 == 0) {
        [elementsToPermute[0], elementsToPermute[i]] = [
          elementsToPermute[i],
          elementsToPermute[0],
        ];
      } else {
        [elementsToPermute[c[i]], elementsToPermute[i]] = [
          elementsToPermute[i],
          elementsToPermute[c[i]],
        ];
      }
      generatedPermutations.push(elementsToPermute);
      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i += 1;
    }
  }

  return generatedPermutations.length;
};

console.log(uniquePaths(7, 1));
