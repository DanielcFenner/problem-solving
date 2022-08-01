/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let pairs = 0;
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in numObj)) {
      numObj[nums[i]] = 1;
    } else {
      pairs += numObj[nums[i]];
      numObj[nums[i]] += 1;
    }
  }
  return pairs;
};
