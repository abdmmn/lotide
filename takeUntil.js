const takeUntil = function(array, callback) {

  let result = [];
  for (const word of array) {
    if (!callback(word)) {
      result.push(word);
    } else break;
  } return result;
};

module.exports = takeUntil