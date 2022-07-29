/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let weakestArr = []

    // fill weakestArr with the sum of the mat row and the row index
    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        let sum = 0

        for (let j = 0; j < row.length; j++) {
            sum += row[j]
        }

        weakestArr.push([sum, i])   
    }

    // sort the weakest array by their sum values
    weakestArr.sort((a, b) => a[0] - b[0])

    // fill new weakest arr with the sorted values and requested amount
    let newWeakestArr = []
    for (let i = 0; i < k; i++) {
        newWeakestArr.push(weakestArr[i][1])
    }

    return newWeakestArr
};

