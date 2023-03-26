const takeUntil = function(array, callback) {
  const result = [];
  for (const word of array) {
    if (callback(word)) {
      return result;
    } 
    result.push(word)
  }
  return result;
};

module.exports = takeUntil
