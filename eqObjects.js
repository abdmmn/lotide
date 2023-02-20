

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };



const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      return eqArrays(object1[key],object2[key]);
    }
     
    if (object1[key] === object2[key]) {
         continue;
      } return true;
    } return false
};

module.exports = eqObjects;