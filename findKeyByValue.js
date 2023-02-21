


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const findKeyByValue = function(obj, searchVal) {
  for (let i in obj) {
    if (obj[i] === searchVal) {
      return i;
    }
  } return undefined;
};

module.exports = findKeyByValue