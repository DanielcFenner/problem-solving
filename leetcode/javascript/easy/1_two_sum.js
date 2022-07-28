/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue
            }
            
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

let twoSumTwo = function(nums, target) {
    let diffObj = {}

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        let diff = target - element
        diffObj[diff] = i       
    }

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (diffObj[element] !== undefined) return [diffObj[element], i]
        
    }
}