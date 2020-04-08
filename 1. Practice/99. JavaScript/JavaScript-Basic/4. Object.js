function getProperty(obj, propertyName) {
  return obj[propertyName];
}

function addProperty(obj, propertyName) {
  obj[propertyName] = true;
}

function addPropertyandValue(obj, propertyName, value) {
  obj[propertyName] = value;
}

function addObjectProperty(obj1, propertyName, obj2) {
  obj1[propertyName] = obj2;
}

function removeProperty(obj, propertyName) {
  delete obj[propertyName];
}

function isPersonOldEnoughToVote(person) {
  if(person.age >= 18) {
    return true;
  } else {
    return false;
  }
}

function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + ' ' + obj.lastName;
}

function removeNumbersLargerThan(num, obj) {
  for (let property in obj) {
    if(obj[property] > num) {
      delete obj[property];
    }
  }
}

function removeOddValues(obj) {
  for (let property in obj) {
    if(obj[property] % 2 !== 0) {
      delete obj[property];
    }
  }
}

function countNumberOfKeys(obj) {
  let output = 0;
  for (let prop in obj) {
    output++;
  }
  return output;
  //return Object.keys(obj).length;
}

function printObject(obj) {
  let output = '';
  for (let property in obj) {
    output = output + property + ': ' + obj[property] +'\n';
  }
  return output;
}

function extend(obj1, obj2) {
  let count = 0;

  for(let prop2 in obj2) {
    count = 0;
    for(let prop1 in obj1) {
      if(prop1 === prop2) {
        count++;
      }
    }
    if (count === 0) {
      obj1[prop2] = obj2[prop2];
    }
  }
 //다른 솔루션
  //Object.assign(obj1, Object.assign({}, obj2, obj1));
}

function countAllCharacters(str) {
  let result = {};

  if(str.length !== []) {
    for(i=0; i < str.length; i++) {
      if(result[str[i]] === undefined){
        result[str[i]] = 0;
      }
      result[str[i]]++;
    }
  }
  return result;
}
