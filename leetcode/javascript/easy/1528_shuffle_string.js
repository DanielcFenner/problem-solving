/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let newArray = new Array(indices.length);

  for (let i = 0; i < indices.length; i++) {
    newArray[indices[i]] = s[i];
  }

  return newArray.join("");
};
