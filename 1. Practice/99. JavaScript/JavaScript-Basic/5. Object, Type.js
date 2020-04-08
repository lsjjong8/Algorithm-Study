function removeStringValues(obj) {
  for(let key in obj) {
    if (typeof obj[key] === 'string'){
      //if (obj[key] === String(obj[key])) {
      delete obj[key];
    }
  }
}

function removeNumberValues(obj) {
  for(let key in obj) {
    if(typeof obj[key] === 'number'){
      delete obj[key];
    }
  }
}

function removeArrayValues(obj) {
  for(let key in obj) {
    if(Array.isArray(obj[key]) ) {
      delete obj[key];
    }
  }
}