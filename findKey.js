const findKeyByValue = require("./findKeyByValue");

const findKey = function(obj, callback) {
  const objKey = Object.keys(obj);
  for (const val of objKey) {
    if (callback(obj[val])) {
      return val;
    }
  }
};

module.exports = findKey;