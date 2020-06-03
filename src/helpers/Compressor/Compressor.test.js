const decompress = require("./Compressor");

test("testing decompress function with group of 2", () => {
  expect(decompress("2[abc]")).toEqual("abcabc");
});

test("testing decompress function with group of 3", () => {
  expect(decompress("3[a]")).toEqual("aaa");
});

test("testing decompress function with group of 3", () => {
  expect(decompress("3[a]2[bc]")).toEqual("aaabcbc");
});

test("testing decompress function with group of 3 and a single letter at the end", () => {
  expect(decompress("3[a]2[bc]h")).toEqual("aaabcbch");
});
test("testing decompress function with group of 3", () => {
  expect(decompress("2[3[a]b]")).toEqual("aaabaaab");
});
