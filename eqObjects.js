const eqArrays = require("./eqArrays")

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    const value1 = object1[key]
    const value2 = object2[key]

    if (Array.isArray(value1) && Array.isArray(value2)) {
       if (eqArrays(value1, value2)) {
        continue
       } else {
        return false
       }
    }
     
    if (value1 !== value2) {
      return false
    }
  }

  return true
};

module.exports = eqObjects;
