/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let matches = 0;
  for (let i = 0; i < items.length; i++) {
    let type = items[i][0];
    let color = items[i][1];
    let name = items[i][2];

    if (ruleKey === "type") {
      if (type === ruleValue) matches++;
    } else if (ruleKey === "color") {
      if (color === ruleValue) matches++;
    } else {
      if (name === ruleValue) matches++;
    }
  }

  return matches;
};
