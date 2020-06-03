const tokenize = require("./tokenize");

test("testing tokenization", () => {
  expect(tokenize("[abc]", 1, 4)).toEqual("abc");
  expect(tokenize("[abcd]", 1, 5)).toEqual("abcd");
  expect(tokenize("[ab]", 1, 3)).toEqual("ab");
});
