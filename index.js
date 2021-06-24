//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage  = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let pantry = []
pantry.push (protein, grain, vegetable, beverage, dessert)
let usermeal = []
//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
for(i = 0; i < pantry.length; i++) {
  usermeal.push(pantry[i][0])
}
console.log(usermeal)

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const input = require("readline-sync");
custommeal = []

while(custommeal.length != 5) {
  console.log(`${pantry[custommeal.length]}`)
selection = input.question ("select from 1-6: ")
console.log(`${pantry[custommeal.length][selection-1]} was added to the meal`)
custommeal.push(pantry[custommeal.length][selection-1])
}
console.log(custommeal)



// Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.

console.log(`${custommeal[0]} was added `)
console.log(`${custommeal[1]} was added `)
console.log(`${custommeal[2]} was added `)
console.log(`${custommeal[3]} was added `)
console.log(`${custommeal[4]} was added `)
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”