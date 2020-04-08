function isOldEnoughToDrink(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

function checkAge(name, age) {
  if (age >= 21) {
    return 'Welcome, ' + name + '!';
  } else {
    return 'Go home, ' + name + '!';
  }
}

function equalsTen(num) {
  return num === 10;
}

function isGreaterthan(num1, num2) {
  return num1 < num2;
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isEvenAndGreaterThanTen(num) {
  if(num % 2 === 0 && num > 10) {
    return true;
  }
  return false;
}

function convertScoreTograde(score) {
  let grade = '';
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  } else if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
  /*   if(0 > score || score > 100) {
    return 'INVALID SCORE';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }*/
}
function convertScoreToGradewithPlusAndMinus(score) {
  let grade;

  if(0 > score || score > 100) {
    return 'INVALID SCORE';
  } else if(score === 100) {
    return 'A+';
  } else if(score >= 90) {
    grade = 'A';
  } else if(score >= 80) {
    grade = 'B';
  } else if(score >= 70) {
    grade = 'C';
  } else if(score >= 60) {
    grade = 'D';
  } else {
    return 'F';
  }
  return grade + minusOrPlus(score);
}

function minusOrPlus(score) {
  if(score%10 >= 8){
    score = '+';
  } else if(score%10 >= 3){
    score = '';
  } else {
    score = '-';
  }
  return score;
}

function or(expression1, expression2) {
  if(expression1 === false && expression2 === false){
    return false;
  } else if (expression1 === true && expression2 === false){
    return true;
  } else if (expression1 === false && expression2 === true){
    return true;
  } else {
    return true;
  }
}

function isEitherEvenAndLessThan9(num1, num2) {
  if(num1 < 9 && num2 < 9) {
    if(num1 % 2 ===0 || num2 % 2 ===0) {
      return true;
    }
  }
  return false;
}
