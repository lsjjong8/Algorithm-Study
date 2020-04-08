function computeSumOfAllEmements(arr) {
  let sum = 0;
  for(i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function getAllLetters(str) {
  let output = [];

  for (i=0; i<str.length; i++) {
    output[i] = str[i];
  }

  return output;
}
