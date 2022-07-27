function duplicateEncode(word){
    let charAmounts = {}
    let charArray = word.toLowerCase().split("")
    charArray.forEach(char => {
        charAmounts[char] = charAmounts[char] + 1 || 1;
    });

    let newString = ""
    charArray.forEach(char => {
        if (charAmounts[char] > 1) newString += ")"
        else newString += "("
    })

    return newString
}

console.log(duplicateEncode("aaabcd"))
