

// copy-pasted "assertEqual.js"


const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log ("✅✅✅ Assertion passed", actual, "!==", expected);
  }
  else {
    console.log ("🛑🛑🛑 Assertion failed", actual, "===", expected)
  }
}; 


// FUNCTION IMPLEMENTATION


const eqArrays = function(actual, expected) {
  if(actual.length !== expected.length) {
    return false
  }

  for (let i = 0; i < actual.length; i++) {
    if(actual[i] !== expected[i]) {
      return false
    }
  }
  return true;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]) )// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]) )// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]) )// => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// !!!!!!  To run in terminal, type >>>>>>   node assertEqual.j   !!!! 






