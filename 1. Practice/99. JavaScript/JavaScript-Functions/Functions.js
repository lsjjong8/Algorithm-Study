function transformFirstAndLast(array) {
  let result = {};
  result[array[0]] = array[array.length-1];
  return result;
}

function getAllKeys(obj) {
  let newarray = [];

  for(let key in obj) {
    newarray.push(key);
  }
  return newarray;
}

function fromListToObject(array) {
  let newobj = {};

  for(let i=0; i < array.length; i++){
    newobj[array[i][0]] = array[i][1];
  }

  return newobj;
}

function listAllValues(obj) {
  let newarray = [];

  for(let key in obj) {
    newarray.push(obj[key]);
  }

  return newarray;
}

function transformEmployeeData(array) {
  let newarray = [];

  for(i=0; i < array.length; i++) {
    newarray[i] = {};
    for(j=0; j< array[0].length; j++) {
      (newarray[i])[array[i][j][0]] = array[i][j][1];
    }
  }
  return newarray;
}

let array = [
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]
];

let output = transformEmployeeData(array);
console.log(output);

function convertObjectToList(obj) {
  let result = [];

  for(let key in obj){
    result.push([key, obj[key]]);
  }

  return result;

  /*let result = [];
  let count = 0;

  for(let key in obj){
    result[count] = [];
    result[count][0] = key;
    result[count][1] = obj[key];
    count++;
  }

  return result; */
}

function greetCustomer(customerData, firstName) {
  let greeting = '';
  
  if (!customerData[firstName]){
  //if (customerData[firstName] === undefined){
    //customerData[firstName] = {};
    //customerData[firstName]['visits'] = 0;
    greeting = 'Welcome! Is this your first time?';
  } else if(customerData[firstName]['visits'] === 1) {
  greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  } else if (customerData[firstName]['visits'] > 1) {
  greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
  } 
  return greeting;
  // customerData[firstName]['visits']++;
}

function convertDoubleSpaceToSingle(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && str[i + 1] === ' ') {
    } else {
      result = result + str[i];
    }
  }
  return result;
  /*let newstr = [];
  const regex = /  /gi;
  newstr = str.replace(regex, ' ');

  return newstr;*/
}

function getIndexOf(char, str) {

  for(let i=0; i < str.length ; i++) {
    if(str[i] === char) {
      return i;
    }
  }

  return -1;
}

function calculateBillTotal(preTaxAndTipAmount) {
  const tax = 9.5 / 100;
  const tip = 15 / 100;

  return (1 + tax + tip) * preTaxAndTipAmount;

}

function getStringLength(string) {
  let count = 0;

  //  while(string[count] !== undefined) {
  while(string[count]) {
    count++;
  }

  return count;
}

function sumDigits(num) {
  let sum = 0;
  let stringNumArr = num.toString().split('');

  for (let i = 0; i < stringNumArr.length; i++) {
    if (stringNumArr[0] === '-' && i === 1) {
      sum = sum - Number(stringNumArr[1]);
    } else if (stringNumArr[i] !== '-') {
      sum = sum + Number(stringNumArr[i]);
    }
  }

  return sum;
  /*let str = String(num);
  let result = 0;

  for(i=0; i < str.length; i++) {
    if(str[i] === '-') {
      i++;
      result = result - Number(str[i]);
    } else {
      result = result + Number(str[i]);
    }
  }
  return result;*/
}

function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  return principal * Math.pow(1 + interestRate/compoundingFrequency, compoundingFrequency * timeInYears) - principal;
}

function modulo(num1, num2) {
  if (isNaN(num2) || num2 === 0) {
    return NaN;
  }

  let plusMinus = num1 > 0 ? 1 : -1;

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  return num1 * plusMinus;
  /*let temp = Math.floor(Math.abs(num1 / num2));

  if(num2 === 0) {
    return NaN;
  } else if(Math.ceil(num1 / num2) === Math.floor(num1 / num2)) {
      return 0;
  } else if(num1 > 0) {
    if(num2 > 0) {
      return num1 - num2 * temp;
    }
      return num1 + num2 * temp;
  } else {
    if(num2 > 0) {
      return num1 + num2 * temp;
    }
      return num1 - num2 * temp;
  }*/
}

function isOddWithoutModulo(num) {
  if (num === 0) {
    return false;
  }
  if (num === 1 ) {
    return true;
  }
  if (num < 0) {
    return isOddWithoutModulo((-num) - 2);
  }
  return isOddWithoutModulo(num - 2);

  /*let temp = num / 2 ;

  if(Math.ceil(temp) === Math.floor(temp)) {
    return false;
  } else {
    return true;
  }*/
}

function computeSquareRoot(num) {
  let closestNum = 1;

  while ( closestNum * closestNum < num) {
    closestNum ++;
  }

  if (closestNum * closestNum === num) {
    return closestNum;
  }

  for (let i = 0; i < 3; i++) {
    closestNum = (closestNum + (num / closestNum)) / 2;
  }

  return closestNum;

  /* var count = 0;

  while(Math.pow(count) <= num) {
    count++;
  }
  return count; */

  //return Math.sqrt(num);
}

function multiplyBetween(num1, num2) {
  if (num2 <= num1) {
    return 0;
  }

  let result = 1

  for (let i = num1; i < num2; i++) {
    result = result * i;
  }

  return result;

  /*let result = 1;

  if(num1 >= num2 ) {
    return 0;
  }
  for(let i = num1 ; i < num2; i++) {
    result = result * i;
  }

  return result;*/
}
