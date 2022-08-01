/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return (ans = nums.map((el) => nums[el]));
};
