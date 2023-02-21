

const flatten = function(array) {
  const arrayFlattened = [];
  for (let val of array) {
    if (Array.isArray(val) === true) {
      for (let elem of val) {
        arrayFlattened.push(elem);
      }
    } else arrayFlattened.push(val);
  } return arrayFlattened;
};

module.exports = flatten;


// FUNCTION IMPLEMENTATION
// const eqArrays = function(actual, expected) {
//   if(actual.length !== expected.length) {
//     return false
//   }

//   for (let i = 0; i < actual.length; i++) {
//     if(actual[i] !== expected[i]) {
//       return false
//     }
//   }
//   return true;
// };



// const assertArraysEqual = function(actual, expected) {
//   const result = eqArrays(actual, expected)

// if (result){
//   console.log ("✅✅✅ Assertion passed", actual, "!==", expected);
// }
// else {
//   console.log ("🛑🛑🛑 Assertion failed", actual, "===", expected)
// }

// };


// // TEST CODE
 
// assertArraysEqual([1, 2, 3], [1, 2, 3])// => true

// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false