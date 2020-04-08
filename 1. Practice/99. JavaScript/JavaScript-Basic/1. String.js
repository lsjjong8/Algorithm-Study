function getFullName(firstname, lastName) {
  return firstName + ' ' + lastName;
}

function getLengthOfWord(word) {
  return word.length;
}

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length)/2;
}

function isOddLength(word) {
  if(word.length%2 !== 0){
    return true; // Odd -> true
  }
  return false;
}

function isEvenLength(word){
  if(word.length%2 === 0){
    return true; // Even -> true
  }
  return false;
}

function findShortestOfThreeWords(word1, word2, word3) {
  if(word1.length <= word2.length) {
    if(word1.length <= word3.length) {
      return word1;
    }
    return word3;
  } else if (word2.length <= word3.length) {
    return word2;
  }
}
function areValidCredentials(name, password) {
  if(name.length > 3 && password.length >= 8) {
    return true;
  }
  return false;
}
function findMinLengthOfThreeWords(word1, word2, word3) {
  if(word1.length <= word2.length) {
    if(word1.length <= word3.length) {
      return word1.length;
    }
    return word3.length;
  } else if (word2.length <= word3.length) {
    return word2.length;
  }
}
