function persistence(num) {
  if (num < 10) {
    return 0;
  }
  let count = 1;
  while (true) {
    console.log(num);
    let numArray = Array.from(String(num), Number);

    let sum = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
      let el = numArray[i];
      sum *= el;
    }
    if (sum < 10) {
      break;
    } else {
      num = sum;
      count++;
    }
  }

  return count;
}
