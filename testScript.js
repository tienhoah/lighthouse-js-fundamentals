// function howManyHundreds(number) {
//   var numString = number.toString();
//   var lenNumString = numString.length;
//   var hundred = Math.floor(number/100);

//   return hundred;
// }

// console.log(howManyHundreds(123456));


// -----------------------------------------------------------
// function isNotNumber(arg) {
//   return typeof arg !== 'number';
// }

// function range(start,end,step){
//   arrayNumbers= [];
//   if (isNotNumber(start) || isNotNumber(end) || isNotNumber(step)) {
//     arrayNumbers = [];
//   } else if (start > end) {
//     arrayNumbers = [];
//   } else if (step < 0) {
//     arrayNumbers = [];
//   } else {
//     for (var i = start; i <= end; i+=step){
//       console.log(i);
//       arrayNumbers.push(i);

//     }
//   }
//   return arrayNumbers;
// }
// console.log(range(0,8,2));
// console.log(range(-9,3,3));

function lastIndexOf(array, incident){
  var indtemp = 0;
  if (array === undefined || array.length === 0) {
    indtemp = -1;
  }
  if (!array.includes(incident)) {
    indtemp = -1;
  }

  for (var i in array){
    if (incident === array[i]) {
      indtemp =  Number(i);
    }
  }
  return indtemp;
}
var arrayExample = [1,2,3,4];
var incExample = 3;

console.log(lastIndexOf(arrayExample,incExample));