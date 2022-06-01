function highAndLow(numbers) {
  let numbersArray = numbers.split(" ");
  let numInts = numbersArray.map((el) => parseInt(el));
  numInts.sort(function (a, b) {
    return a - b;
  });

  console.log(numInts);

  return `${numInts[numInts.length - 1]} ${numInts[0]}`;
}
