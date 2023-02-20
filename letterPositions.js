const letterPositions = function(sentence) {
  const result = {};
  for (let i in sentence) {
    if(sentence[i] !== ' ') {
    if (result[sentence[i]]) {
      result[sentence[i]].push(Number(i));
    } else result[sentence[i]] = [Number(i)]
  } 
} return result;
};

module.exports = letterPositions;