function getElementOfArrayProperty(obj, key, index) {
  let newarray = obj[key];

  if (Array.isArray(newarray)) { // (new.length === 0), (index >= newarray.length)
    return newarray[index];
  } else { 
    return undefined;
  }
  /*if (Array.isArray(newarray)) {
    if (newarray.length === 0) {
      return undefined;
    } else if(index >= newarray.length) {
      return undefined;
    } else {
      return newarray[index];
    }
  } else {
    return undefined;
  } */
}

function select(arr, obj) {
  let result = {};

  for(let key in obj) {
    for(i=0; i < arr.length; i++) {
      if(key === arr[i]) {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

function getElementsLessThan100AtProperty(obj, key) {
  let ArrayProperty = obj[key];

  if(!Array.isArray(ArrayProperty)) {
    return [];
  } else {
    return ArrayProperty.filter(lessThan100); 
  }
  /* for(i=0; i < temp.length; i++) {
      if(lessThan100(temp[i])) {
        output[count] = temp[i];
        count++;
      }
    } */
}
function lessThan100(number) {
  return number < 100;
}

function getNthElementOfProperty(obj, key, n) {
  if (!Array.isArray(obj[key])) {
    return undefined
  }
  return obj[key][n]
  /*let newArr = obj[key];
  if(typeof(newArr) === 'undefined') {
    return undefined;
  } else if(newArr.length === 0) {
    return undefined;
  } else if(n > newArr.length) {
    return undefined;
  }
  return newArr[n];*/
}

function getLastElementOfProperty(obj, key) {
  let prop = obj[key];
  if (!Array.isArray(prop)) {
    return undefined
  }

  return prop[prop.length - 1]

  /*let newArr = obj[key];
  if(typeof(newArr) === 'undefined') {
    return undefined;
  } else if(newArr.length === 0) {
    return undefined;
  } else if(!Array.isArray(newArr)) {
    return undefined;
  }
  return newArr[newArr.length-1];*/
}

function getSquaredElementsAtProperty(obj, key) {
  let newArr = obj[key];
  if(!Array.isArray(newArr)) {
    return [];
  }
  
  return newArr.map(square);
}
function square(number) {
  return number * number;
}

function getAllButLastElementOfProperty(obj, key) {
  let newArr = obj[key];
  if (!Array.isArray(newArr)) {
    return [];
  }
  return newArr.slice(0, -1);
  
  /*let newArr = obj[key];
  if (!Array.isArray(newArr)) {
    return [];
  }
  newArr.pop();
  return newArr;*/
}

function getProductOfAllElementsAtProperty(obj, key) {
  let arr = obj[key];
  
  if(!Array.isArray(arr)) {
    return 0;
  } else if(arr.length === 0) {
    return 0;
  }
  
  return arr.reduce(product);
  
  /*const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return arr.reduce(reducer);*/
}
function product(acc, value) {
  return acc * value;
}