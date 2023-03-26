const flatten = function(array) {
  const arrayFlattened = [];
  for (let val of array) {
    if (Array.isArray(val)) {
      for (let elem of val) {
        arrayFlattened.push(elem);
      }
    } else arrayFlattened.push(val);
  } return arrayFlattened;
};

module.exports = flatten;
