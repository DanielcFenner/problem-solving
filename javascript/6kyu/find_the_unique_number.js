// function findUniq(arr) {
//   let sorted = [...arr].sort((a, b) => a - b);
//   if (sorted[0] !== sorted[1]) {
//     return sorted[0];
//   } else {
//     return sorted[sorted.length - 1];
//   }
// }

function findUniq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    obj[el] = obj[el] + 1 || 1;
  }

  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (obj[key] === 1) {
      return +key;
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1, 3, 3, 3]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
