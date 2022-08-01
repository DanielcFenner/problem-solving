/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        let stringEl = el.toString();
        if (stringEl.length % 2 === 0) count++;
    }
    return count
};

console.log(findNumbers([12,345,2,6,7896]))