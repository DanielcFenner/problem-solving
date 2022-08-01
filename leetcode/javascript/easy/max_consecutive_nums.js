/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let currentBiggest = 0;
    let currentConsec = 0;
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i]
        if (el === 1) {
            currentConsec++;
        } else {
            if (currentConsec > currentBiggest) currentBiggest = currentConsec
            currentConsec = 0;
        }

    }
    
    if (currentConsec > currentBiggest) currentBiggest = currentConsec
    return currentBiggest
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))