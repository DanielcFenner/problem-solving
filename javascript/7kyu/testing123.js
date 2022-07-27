let number=function(array){
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        newArray.push(`${i+1}: ${el}`)
    }

    return newArray
  }

  console.log(number(["a", "b", "c"]))