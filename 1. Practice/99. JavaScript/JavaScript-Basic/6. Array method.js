function addToFront (arr, element) {
  arr.unshift(element);
  return arr;
}

function addToBack(arr, element) {
  arr.push(element);
  return arr;
  /*arr[arr.length] = element;
  return arr;*/ 
  // 배열 범위 초과 오류 생길 수 있음(javascript에서는 배열 동적이라 가능?)
}

function joinArrays(arr1, arr2) {
  let result = [];   
  if(arr1.length ===0) {
    return arr2;
  }
  for (i=0; i<arr1.length+arr2.length; i++) {
    if(i<arr1.length) {
      result.push(arr1[i]);
    } else {
      result.push(arr2[(i-arr1.length)]);
    }
  }
  return result;
  // 다른 솔루션
  // return arr1.concat(arr2);
}

function getElementsAfter(array, n) {
  let newArray = []

  for(let i=n+1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
  /*if(n>array.length) {
    return [];
  }
  else if (n===0){
    return [];
  }
  array.splice(0, n+1);
  return array;*/
}

function getElementsUpTo(array, n) {
  return array.splice(0, n);
    /*if(n>array.length) {
    return array;
  }
  else if (n===0){
    return [];
  }*/
}

function getAllElementsButFirst(array) {
  return array.slice(1, array.length);
  /*if(array.length === 1) {
    return [];
  }
  array.shift();
  return array;*/
}

function getAllElementsButLast(array) {
  return array.slice(0, array.length-1);
}

function removeFromFront(arr) {
  arr.shift();
  return arr;
}

function removeFromBack(arr) {
  arr.pop();
  return arr;
}

function removeFromBackOfNew(arr) { // immutable
  return arr.slice(0, arr.length-1);
}

function addToBackOfNew(arr, element) { // immutable
  let result = arr.slice();;
  result.push(element);
  return result;
}

function addToFrontOfNew(arr, element) { // immutable
  let result = arr.slice();
  result.unshift(element);
  return result;
}

function joinArrayOfArrays(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
      newArr = newArr.concat(arr[i]);
  }
  return newArr;

  /*const joinedArr = arr.reduce(function(acc, val) {
      return acc.concat(val);
  });
  return joinedArr;*/
}

function getAllElementsButNth(array, n) {
  let result = []

  for (let i = 0; i < array.length; i++) {
      if (i !== n) {
      result.push(array[i])
      }
  }
  
  return result;
  
  // 다른 솔루션
  /*if(n>array.length){
      return array;
  }
  array.splice(n,1); // mutable
  return array;*/
}

function getAllLetters(str) {
  return str.split('');
  /*let output = [];
  if (str.length === []) {
    return output;
  }
  for (i=0; i<str.length; i++) {
    output[i] = str[i];
  }

  return output;*/
}

function getAllWords(str) {
  if (str === '') {
    return [];
  } else {
    return str.split(' ');
  }
  /*let word = [];
  let count = 0;

  word[count] = '';
  if(str === '') {
    return [];
  }

  for(i=0; i < str.length; i++) {
    if(str[i] !== ' ') {
      word[count] = '' + word[count]  + str[i];
    } else {
      count++;
      word[count] = '';
    }
  }
  return word;*/
}

function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return '';
  }

  return arr.reduce((acc, cur) => {
    if (typeof acc !== 'string') {
      if (typeof cur === 'string') {
        return cur;
      }
      return '';
    }

    if (typeof cur === 'string') {
      if (cur.length < acc.length) {
        return cur;
      }
      return acc;
    }
    return acc;
  })
  
  /*let min = '                        ';
  let count = 0;

  for(i=0; i < arr.length; i++) {
    if(typeof(arr[i]) === 'string') {
      if(min.length > arr[i].length) {
        min = arr[i];
        count++;
      }
    } else {
      if(min.length === 0) {
        min = arr[i];
      }
    }
  }
  if(arr.length === 0 || count === 0) {
    min = '';
  }
  return min;*/
}

function removeElement(array, discarder) {
  return array.filter(function(el) {
    if (el !== discarder) {
      return true
    }
    return false
  })

  /*for(i=0; i < array.length; i++) {
    if(array[i] === discarder) {
      // delete <- 객체에서
      array.splice(i, 1);
    }
  }
  return array;*/
}

function keep(array, keeper) {
  return array.filter((el) => {
    if (el === keeper) {
      return true
    }
    return false
  });

  /*let count = 0;
  for(i=0; i < array.length; i++) {
    if(array[i] !== keeper) {
      array.splice(i, 1); 
      i = --i; // 배열 인덱스를 바꿔서 오류 발생 방지
    } else {
      count++;
    }
  }
  if(count === 0) {
    return [];
  }
  return array;*/
}

function findSmallestElement(arr) {
  if(arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  for(let i=1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } 
  }
  return min;

  /*if (arr.length === 0) {
    return 0;
  }
  return arr.reduce(function(acc, cur) {
    return Math.min(acc, cur);
  });*/
}

function computeSumOfAllElements(arr) {
  if(arr.length ===0) {
    return 0;
  }
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
}

function getLengthOfLongestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce(function(acc, cur) {
    if(acc.length < cur.length) {
      return cur;
    } 
    return acc;
  }).length;
  /*let max = 0;

  if(arr.length === 0) {
    return 0;
  }
  for(i=0; i < arr.length; i++) {
    if(max < arr[i].length) {
      max = arr[i].length;
    }
  }
  return max;*/
}

function getLongestElement(arr) {
  if (arr.length === 0) {
  return '';
}

return arr.reduce(function(acc, cur) {
  if (acc.length > cur.length) {
    return acc;
  } else {
    return cur;
  }
});
/*let max = 0;
let index = 0;

if(arr.length === 0) {
  return '';
}
for(i=0; i < arr.length; i++) {
  if(max < arr[i].length) {
    max = arr[i].length;
    index = i;
  }
}
return arr[index];*/
}

function filterOddLengthWords(words) {
  return words.filter(function(el) {
  return !(el.length % 2 === 0);
  })
  /*if(words.length === 0) {
    return [];
  }
  for(i=0; i < words.length; i++) {
    if(words[i].length%2 === 0) {
      words.splice(i, 1);
      i = i - 1;
    }
  }
  return words;*/
}

function computeAverageOfNumbers(nums) {
  if(nums.length === 0) {
    return 0;
  }
  
  let total = nums.reduce(function(acc, curr) {
    return acc + curr;
  });

  return total / nums.length;

  /*let sum = 0;

  if(nums.length === 0) {
    return 0;
  }
  for(i=0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum / nums.length;*/
}