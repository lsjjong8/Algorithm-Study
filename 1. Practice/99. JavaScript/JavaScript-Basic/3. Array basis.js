function getType(anything) {
  if (Array.isArray(anything)) {
    return 'array';
  }
  return typeof(anything);
}

function getFirstElement(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
}

function getLastElement(array) {
  if (array.length > 0) {
    return array[array.length-1];
  }
  return undefined;
}

function getNthElement(array, n) {
  if (array.length === 0) {
    return undefined;
  }
  return array[n];
}
