const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    if (letter !== " ") {
      if (result[letter]) {
        result[letter].push(i)
      } else {
        result[letter] = [i];
      }
    }
  } 
  return result;
};

module.exports = letterPositions;
