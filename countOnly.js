

// const assertEqual = function(actual, expected) {
//   if (actual === expected){
//     console.log ("✅✅✅ Assertion passed", actual, "!==", expected);
//   }
//   else {
//     console.log ("🛑🛑🛑 Assertion failed", actual, "===", expected)
//   }

// };

const countOnly = function(allitem, itemToCount) {
  const result = {};
  for (const item of allitem) {
    if (itemToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};


module.exports = countOnly