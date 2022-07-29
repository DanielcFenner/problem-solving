/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let numerals = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let numArr = []

    for (let i = 0; i < s.length; i++) {
        numArr.push(numerals[s[i]])
    }

    let sum = 0

    for (let i = 0; i < numArr.length; i++) {
        let el = numArr[i]
        let nextEl = numArr[i+1]
        if (el < nextEl) {
            sum += nextEl - el
            i++;
        } else {
            sum += el
        }
    }

    return sum
};
