function fakeBin(x){
    let array = x.split("")
    let newString = ""
    array.forEach(char => {
        num = parseInt(char)
        num < 5 ? newString += 0 : newString += 1
    });
    return newString
}

function fakeBin2(x) {
    let array = x.split("").map(char => char < 5 ? 0 : 1).join("")
    return array
}