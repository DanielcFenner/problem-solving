/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = [...heights].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      count++;
    }
  }
  return count;
};

heightChecker([1, 1, 4, 2, 1, 3]);
