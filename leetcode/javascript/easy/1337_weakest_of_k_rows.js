/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let weakestArr = []
    let smallest = mat[0]

    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        let sum = 0

        for (let j = 0; j < row.length; j++) {
            sum += row[j]
        }

        weakestArr.push([sum, i])   
    }

    weakestArr.sort((a, b) => a[0] - b[0])

    let newWeakestArr = []

    for (let i = 0; i < k; i++) {
        newWeakestArr.push(weakestArr[i][1])
    }

    return newWeakestArr
};

console.log(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]
, 3))
