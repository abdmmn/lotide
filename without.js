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



const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected)

  if (result){
    console.log ("✅✅✅ Assertion passed", actual, "!==", expected);
  }
  else {
    console.log ("🛑🛑🛑 Assertion failed", actual, "===", expected)
  }
};

const without = (source, itemsToRemove) => {
  const result = []
  for (let item of source) { //this is the for of loop, item is just a variable name it represents an element in the array
    if(!itemsToRemove.includes(item)) {// if item is not included in the itemstoremove array
      result.push(item)// add item to result array
    }
  }

  return result
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


// TEST CODE
 
console.log(eqArrays([1, 2, 3], [1, 2, 3]))// => true

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);