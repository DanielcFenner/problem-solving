function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }

  let newArray1 = [...array1].sort((a, b) => a - b);
  let newArray2 = [...array2].sort((a, b) => a - b);

  for (let i = 0; i < newArray1.length; i++) {
    const element = newArray1[i] * newArray1[i];
    if (element !== newArray2[i]) {
      return false;
    }
  }

  return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

let test1 = [1, 2, 3];
let test2 = [1, 2, 3];

console.log(comp(a1, a2));
console.log(a1);
