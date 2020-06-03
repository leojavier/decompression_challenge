const tokenize = require("../tokenize/tokenize");
const findBracket = require("../findBracket/findBracket");

const decompress = (str) => {
  let result = [];

  const unwrap = (str) => {
    const startBraket = str.indexOf("[");
    const firstLetter = startBraket + 1;

    let endBracket = findBracket(firstLetter, str);

    if (startBraket > 0) {
      const limit = str.split("[")[0];

      for (let j = 0; j < limit; j++) {
        const token = tokenize(str, firstLetter, endBracket);
        token.includes("[")
          ? result.push(decompress(token))
          : result.push(token);
      }
    } else {
      return result.push(str);
    }

    if (endBracket < str.length) {
      const next = str
        .split("")
        .slice(endBracket + 1, str.length)
        .join("");

      unwrap(next);
    }
  };
  unwrap(str);

  return result.join("");
};

module.exports = decompress;
