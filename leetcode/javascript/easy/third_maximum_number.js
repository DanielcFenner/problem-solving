/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  //   let uniqueArr = new Set([...nums]);
  //   uniqueArr = [...uniqueArr];
  let numsObj = {};
  let uniqueArr = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!(element in numsObj)) {
      numsObj[element] = 1;
      uniqueArr.push(element);
    }
  }

  uniqueArr = uniqueArr.sort((a, b) => b - a);

  if (uniqueArr[2] === undefined) {
    return uniqueArr[0];
  } else {
    return uniqueArr[2];
  }
};

console.log(thirdMax([1, 2, 2, 5, 3, 5]));
