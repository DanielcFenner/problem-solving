/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArrayOld = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let prePeak = [];
  let postPeak = [];

  let peaked = false;
  if (arr[0] >= arr[1]) {
    peaked = true;
  }
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (!peaked) {
      prePeak.push(el);
    } else {
      postPeak.push(el);
    }

    if (!peaked && arr[i] >= arr[i + 1]) {
      peaked = true;
    }
  }

  // prePeak ascending check
  console.log(prePeak);
  if (prePeak.length === 0) return false;
  if (prePeak[prePeak.length - 1] <= postPeak[0]) return false;
  for (let i = 0; i < prePeak.length - 1; i++) {
    if (prePeak[i] >= prePeak[i + 1]) {
      return false;
    }
  }

  // postPeak descending check
  if (postPeak.length === 0) return false;
  if (prePeak[prePeak.length - 1] <= postPeak[0]) return false;
  for (let i = 0; i < postPeak.length; i++) {
    if (postPeak[i] <= postPeak[i + 1]) {
      return false;
    }
  }
  return true;
};

function validMountainArray(arr) {
  let peak = 0;
  let peakIndex = 0;
  // find the index of the peak
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > peak) {
      peak = element;
      peakIndex = i;
    }
  }
  if (peakIndex === 0 || peakIndex === arr.length - 1) {
    return false;
  }

  for (let i = 0; i < peakIndex; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }

  for (let i = peakIndex; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(validMountainArray([1, 3, 2]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
