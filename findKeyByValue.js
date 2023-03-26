const findKeyByValue = function(obj, searchVal) {
  for (let key in obj) {
    if (obj[key] === searchVal) {
      return key;
    }
  }
};

module.exports = findKeyByValue