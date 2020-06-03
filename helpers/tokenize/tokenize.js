/**
 * tokenize sanitize the string.
 * @param  {String} The data to be tokenized
 * @param  {Number} start index
 * @param  {Number} Limit
 * @returns {String} a string without brakets
 */
const tokenize = (str, start, end) => str.split("").slice(start, end).join("");

module.exports = tokenize;
