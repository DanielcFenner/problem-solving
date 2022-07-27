function squareDigits(num){
    let numArray = num.toString().split("")
    let numString = ""
    numArray.forEach(element => {
        let number = parseInt(element) * parseInt(element);
        numString += number
    });
    return parseInt(numString);
  }

  function squareDigits2(num) {
    // Takes a number and squares each indiviual digit and stitches them back together
    return parseInt(num.toString().split("").map((el) => parseInt(el) * parseInt(el)).join(""))
  }


console.log(squareDigits2(123))