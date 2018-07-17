function howManyHundreds(number) {
  var numString = number.toString();
  var lenNumString = numString.length;
  var hundred = Math.floor(number/100);
  // if (numString[lenNumString-2] === "5") {
  //   return hundred - 1;
  // } else {
  //   return hundred;
  // }
  return hundred;
}

console.log(howManyHundreds(123456));
