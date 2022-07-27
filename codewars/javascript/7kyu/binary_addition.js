function addBinary(a,b) {
    let sum = a + b;
    let arr = []

    while (sum !== 1) {
        if (sum % 2 == 0) {
            arr.unshift("0")
        } else {
            arr.unshift("1")
        }
        sum = Math.floor(sum / 2)
    }

    arr.unshift("1")

    return arr.join("")

}

