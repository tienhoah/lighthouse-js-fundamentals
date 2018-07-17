// var start = 100;
// var end = 201;

// for (var i = start; i < end; i++){
//   if (i % 3 === 0 && i % 4 ===0) {
//     console.log("loopylighthouse");
//   } else if (i % 3 === 0) {
//     console.log("loopy");
//   } else if (i % 4 === 0) {
//     console.log("lighthouse");
//   } else {
//     console.log(i);
//   }

// }

function loopyLighthouse(firstArray, secondArray, words){
    var start = firstArray[0];
    var end = firstArray[1] + 1;
    for (var i = start; i < end; i++){
      if (i % secondArray[0] === 0 && i % secondArray[1] ===0) {
        console.log(words[0] + words[1]);
      } else if (i % secondArray[0] === 0) {
        console.log(words[0]);
      } else if (i % secondArray[1] === 0) {
        console.log(words[1]);
      } else {
        console.log(i);
      }
    }
}

loopyLighthouse([15,90],[2,5],["Batty","Beacon"]);