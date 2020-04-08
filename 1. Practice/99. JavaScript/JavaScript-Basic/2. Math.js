function computeAreaOfATriangle(base, height) {
  return base * height / 2 ;
}

function computePower(num, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return num;
  }
  return num * computePower(num, exponent-1);
}

function computePerimeterOfACircle(radius) {
  return 2 * radius * Math.PI;
}
