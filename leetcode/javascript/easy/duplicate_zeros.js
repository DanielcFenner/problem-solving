/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === 0) {
            shiftRight(arr, i)
            arr[i] = 0
            i++
        }
    }
    return arr
    
};

function shiftRight(arr, index) {
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i] = arr[i-1]
    }
    return arr
}

//console.log(shiftRight([1,0,2,3,0,4,5,0], 3))
//console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
//console.log(duplicateZeros([1,2,3]))