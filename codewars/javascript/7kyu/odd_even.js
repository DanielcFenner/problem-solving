function oddOrEven(array) {
  if (array.length === 0) return "even";
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
  }

  if (sum % 2 === 0) return "even";
  else return "odd";
}
