const decompress = require("./helpers/Compressor/Compressor");

console.log("2[abc] -> ", decompress("2[abc]"));
console.log("3[a] ->", decompress("3[a]"));
console.log("3[a]2[bc] ->", decompress("3[a]2[bc]"));
console.log("3[a]2[bc]h ->", decompress("3[a]2[bc]h"));
console.log("2[3[a]b] ->", decompress("2[3[a]b]"));
