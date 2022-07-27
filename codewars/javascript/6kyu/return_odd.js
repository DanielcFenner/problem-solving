function findOdd(A) {
  let obj = {};

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];

      if (element % 2 !== 0) {
        return parseInt(key);
      }
    }
  }
}
