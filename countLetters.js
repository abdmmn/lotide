// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };


const countLetters = function(sentence) {
  const sentNoSpace = sentence.replace(/ /g,"");
  const result = {};
  for (const letter of sentNoSpace) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } return result;
};

module.exports = countLetters;