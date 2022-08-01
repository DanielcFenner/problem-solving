/**
 * @param {number[]} nums
 * @return {number[]}
 * @description Maps an array to squared versions of themelves and sorts them
 */
 var sortedSquares = function(nums) {
    return nums.map((e) => e * e).sort((a, b) => a-b)
};

console.log(sortedSquares([-4,-1,0,3,10]));