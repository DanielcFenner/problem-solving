/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length * 2; i++) {
    let iMod = i % nums.length;
    ans.push(nums[iMod]);
  }
  return ans;
};

console.log(getConcatenation([1, 2, 3]));
