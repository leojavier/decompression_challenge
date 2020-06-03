# Decompression Algorith Challenge

The Challenge in this exercise, you're going to decompress a compressed string.
Your input is a compressed string of the format number[string] and the decompressed
output form should be the string written number times.

# Getting Started

The only dependency in the package.json file is Jest. I used their assertion library to build the tests.

```
$npm install

// To run the project
$npm start
```

# Runing Tests

you must jest to run the tests

```
$jest
```

## Notes

- I used _JSDocs_ to properly comment the functions. This will generate intellisense and instructions for other developers when using my methods or functions
- I broke the _findBracket_ and the _tokenize_ function into separate modules to fully test them before using them

### System requirements

- Node V12.16.3 or higher

### Project sequirements:

- The input 3[abc]4[ab]c
  Output: abcabcabcababababc

- Number can have more than one digit. For example, 10[a] is allowed
  Output: aaaaaaaaaa

- One repetition can occur inside another. For example, 2[3[a]b] decompresses into
  Output: aaabaaab

- Characters allowed as input include digits, small English letters and brackets [ ].
- Digits are only to represent amount of repetitions.
- Letters are just letters.
- Brackets are only part of syntax of writing repeated substring.

**IMPORTANT: Input is always valid, so no need to check its validity.**

## Author

- Leo Javier
