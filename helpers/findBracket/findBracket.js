/**
 * findBracket finds the index of the closing bracket
 * @param  {Number} firstLetter
 * @param  {String} the data
 * @returns {Number} Returns the index of the closing bracket
 */
const findBracket = (firstLetter, str) => {
  let count = 0;
  let closingBracket;

  for (let i = firstLetter; i < str.length; i++) {
    if (str[i] === "[") {
      count++;
    } else if (str[i] === "]" && count === 0) {
      closingBracket = i;
    } else if (str[i] === "]") {
      count--;
    }
  }

  return closingBracket;
};

module.exports = findBracket;
