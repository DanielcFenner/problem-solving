function find_average(array) {
  if (array.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
  }
  return sum / array.length;
}
