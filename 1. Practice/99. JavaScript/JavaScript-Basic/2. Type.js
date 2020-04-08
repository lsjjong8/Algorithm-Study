function convertToString(anything) {
  return String(anything);
  //return anything.toString();
}

function convertToNumber(anything) {
  return Number(anything);
}

function isFalsy(anything) {
  return !Boolean(anything);
  /*if (anything === 0){
    return true;
  } else if (anything === '') {
    return true;
  } else if (typeof(anything) === 'undefined') {
    return true;
  } else if (typeof(anything) === 'NaN') {  <-- not enough
    return true;
  } else if(anything === true) {
    return false;
  } else {
    return true;
  }*/
}
