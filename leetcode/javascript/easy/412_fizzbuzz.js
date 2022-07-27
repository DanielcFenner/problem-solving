/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let fbArray = [];
    
    for (let i = 1; i < n + 1; i++) {
        switch (true) {
            case i % 3 == 0 && i % 5 == 0:
                fbArray.push("FizzBuzz");
                break;
            case i % 3 == 0:
                fbArray.push("Fizz");
                break;
            case i % 5 == 0:
                fbArray.push("Buzz");
                break;
            default:
                fbArray.push(i.toString());
                break;
        }
    }
    
    return fbArray;
};