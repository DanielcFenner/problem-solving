function removeSmallest(numbers) {
  let smallest = numbers[0];
  let index = 0;

  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];

    if (el < smallest) {
      smallest = el;
      index = i;
    }
  }

  let newArray = [...numbers];
  newArray.splice(index, 1);
  return newArray;
}
