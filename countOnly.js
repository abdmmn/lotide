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
