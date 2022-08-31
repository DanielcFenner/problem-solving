// set pointer to end
// find biggest in array
// reverse array to the index of biggest to put the biggest at the front of the array
// reverse array to end pointer to move biggest to sorted position and reduce end pointer by 1

function pancakeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let flips = [];
  let endPointer = arr.length - 1;
  while (endPointer > 0) {
    let biggest = arr[0];
    let biggestIndex = 0;
    for (let i = 1; i <= endPointer; i++) {
      let el = arr[i];
      if (el > biggest) {
        biggest = el;
        biggestIndex = i;
      }
    }
    if (biggestIndex !== 0) {
      arr = reverseToIndex(arr, biggestIndex);
      flips.push(biggestIndex + 1);
    } else {
      arr = reverseToIndex(arr, endPointer);
      flips.push(endPointer + 1);
      endPointer--;
    }
  }
  return flips;
}

function reverseToIndex(arr, index) {
  let newArr = [];
  for (i = index; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  for (i = index + 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// set pointer to end
// find biggest in array
// reverse array to the index of biggest to put the biggest at the front of the array
// reverse array to end pointer to move biggest to sorted position and reduce end pointer by 1
