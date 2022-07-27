/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    
    let biggestSum = 0
    for (let i = 0; i < accounts.length; i++) {
        let innerArray = accounts[i]
        let innerSum = 0
        for (let j = 0; j < innerArray.length; j++) {
            innerSum += innerArray[j]
        }
        if (innerSum > biggestSum) {
            biggestSum = innerSum
        }
    }
    return biggestSum
};