/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let X = 0;

  operations.forEach((el) => {
    switch (el) {
      case "--X":
        X -= 1;
        break;
      case "X--":
        X -= 1;
        break;
      case "X++":
        X += 1;
        break;
      case "++X":
        X += 1;
        break;
    }
  });

  return X;
};
