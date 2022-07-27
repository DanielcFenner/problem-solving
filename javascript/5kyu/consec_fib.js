function productFib(prod){
    let fib = [0, 1]
    let fibProd = 0

    let index = 2
    while (fibProd < prod) {
        fib.push(fib[index - 1] + fib[index - 2])
        fibProd = fib[index] * fib[index - 1]
        if (fibProd === prod) {
            return [fib[index - 1], fib[index], true]
        }
        index++;
    }
    return [fib[index - 2], fib[index - 1], false]

  }

  console.log(productFib(800))