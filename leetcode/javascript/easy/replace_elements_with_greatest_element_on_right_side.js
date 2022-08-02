/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let biggest = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > biggest) {
        biggest = arr[j];
      }
    }
    arr[i] = biggest;
    biggest = 0;
  }
  arr[arr.length - 1] = -1;
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
