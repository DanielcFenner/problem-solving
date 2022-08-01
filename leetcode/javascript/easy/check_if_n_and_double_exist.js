/**
 * @param {number[]} arr
 * @return {boolean}
 */
//  var checkIfExist = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i];
//         for (let j = 0; j < arr.length; j++) {
//             let elTwo = arr[j];
//             if (el === 2 * elTwo && i !== j) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

let checkIfExist = function (arr) {
  let numsObj = {};

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!(el in numsObj)) {
      numsObj[el] = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (2 * el in numsObj && numsObj[2 * el] !== i) {
      return true;
    }
  }

  return false;
};
