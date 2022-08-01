/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (index[i] < nums.length) {
      arr.splice(index[i], 0, nums[i]);
    } else {
      arr.push(nums[i]);
    }
  }
  return arr;
};
