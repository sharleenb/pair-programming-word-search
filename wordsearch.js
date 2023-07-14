const transpose = function (letters) {
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = letters[i][j];
      letters[i][j] = letters[j][i];
      letters[j][i] = temp;
    }
  }
  return letters;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
