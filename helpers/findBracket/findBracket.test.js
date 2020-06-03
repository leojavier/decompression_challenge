const findBracket = require("./findBracket");

test("testing to find bracket", () => {
  expect(findBracket(1, "[abc]")).toBe(4);
  expect(findBracket(1, "[ab]")).toBe(3);
  expect(findBracket(1, "[abgfl]")).toBe(6);
});
