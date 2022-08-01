/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr = [];
  let middle = Math.floor(nums.length / 2);
  for (let i = 0; i < middle; i++) {
    arr.push(nums[i]);
    arr.push(nums[middle + i]);
  }
  return arr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7]));
