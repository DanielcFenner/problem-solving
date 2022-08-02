/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      shift(nums, i);
    }
  }
  return nums;
};

function shift(nums, actualIndex) {
  let thingToMove = nums[actualIndex];
  for (let i = actualIndex; i < nums.length; i++) {
    nums[i] = nums[i + 1];
  }
  nums[nums.length - 1] = thingToMove;
  return nums;
}

console.log(moveZeroes([0, 0, 1]));
