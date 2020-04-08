function sum(n) {
  return n * (n+1) / 2;
}

function repeatString(string, num) {
  let output = '';

  for (i=0; i<num; i++) {
    output = output + string;
  }
  return output;
}

function countCharacter(str, char) {
  let count = 0;

  for(i=0; i < str.length; i++) {
    if(str[i] === char) {
      count++;
    }
  }
  return count;
}
