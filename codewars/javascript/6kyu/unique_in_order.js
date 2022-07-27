var uniqueInOrder = function (iterable) {
  // actually dont need to turn string into an array as
  // you can iterate over a string like an array!
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }

  let newArray = [];

  for (let i = 0; i < iterable.length; i++) {
    const el = iterable[i];

    if (newArray[newArray.length - 1] !== el) {
      newArray.push(el);
    }
  }

  return newArray;
};
