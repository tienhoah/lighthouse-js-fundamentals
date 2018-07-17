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


function calculateRectangleArea(length,width) {
  if (length <0 || width < 0) {

    console.log("undefined");
  } else {
    console.log(length * width);
  }

}

calculateRectangleArea(-1,0);