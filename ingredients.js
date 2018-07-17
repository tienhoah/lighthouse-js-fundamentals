var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
var lengthIngredients = ingredients.length-1;
console.log("Total Number of Ingredients: " + lengthIngredients)

console.log("------While Loop------")
// Write a while loop that prints out the contents of ingredients:
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++;
}

console.log("------For Loop------")
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++ ){
  console.log(ingredients[i]);
}

console.log("------Reverse While Loop------")
// Write any loop (while or for) that prints out the contents of ingredients backwards:
while (lengthIngredients >= 0){
  console.log(ingredients[lengthIngredients]);
  lengthIngredients--;
}