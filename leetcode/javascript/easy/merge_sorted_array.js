/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let nums2Index = 0;
//   for (let i = 0; i < nums1.length; i++) {
//     const el = nums1[i];
//     if (el >= nums2[nums2Index] || (el === 0 && i >= m)) {
//       if (nums2Index < n) {
//         shiftRight(nums1, i);
//         nums1[i] = nums2[nums2Index];
//         nums2Index++;
//       }
//     }
//   }
// };

// function shiftRight(arr, index) {
//   for (let i = arr.length - 1; i >= index; i--) {
//     arr[i] = arr[i - 1];
//   }
//   return arr;
// }

// function merge(nums1, m, nums2, n) {
//   if (m === 0) {
//     for (let i = 0; i < nums2.length; i++) {
//         nums1[i] = nums2[i];
//     }
//     return
//   }

//   let nums2Index = 0;
//   for (let i = 0; i < nums1.length; i++) {
//     if (
//       (nums2[nums2Index] < nums1[i] || (nums1[i] === 0 && i < m)) &&
//       nums2Index < n
//     ) {
//       InsertAndShift(nums1, i, nums2[nums2Index]);
//       nums2Index++;
//     }
//   }
// }

// function merge(nums1, m, nums2, n) {
//   if (m > 0) m--;
//   if (n > 0) n--;
//   for (let i = nums1.length - 1; i >= 0; i--) {
//     if (nums1[m] >= nums2[n]) {
//       nums1[i] = nums1[m];
//       m--;
//     } else if (nums2[n] > nums1[m]) {
//       nums1[i] = nums2[n];
//       n--;
//     }
//   }
// }

function InsertAndShift(arr, index, insert) {
  for (let i = arr.length - 1; i >= index + 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = insert;
}

function merge(nums1, m, nums2, n) {
  let nums1Copy = [...nums1];

  let nums1Index = 0;
  let nums2Index = 0;
  for (let i = 0; i < n + m; i++) {
    const nums1El = nums1Copy[nums1Index];
    const nums2El = nums2[nums2Index];

    if ((nums1El < nums2El && nums1Index < m) || nums2Index === n) {
      nums1[i] = nums1El;
      nums1Index++;
    } else if (nums2Index < n) {
      nums1[i] = nums2El;
      nums2Index++;
    }
  }
}

// [1,2,3,0,0,0]
// [1,2,2,3,0,0]

// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
let nums1 = [1, 2, 4, 5, 6, 0];
let nums2 = [3];
// InsertAndShift(nums1, 4, 7)
merge(nums1, 5, nums2, 1);
console.log(nums1);
