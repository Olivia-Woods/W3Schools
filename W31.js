// DATES (Objects)

// Create a Date object and alert the current date and time.
const d = new Date();
alert(d);

// const is a keyword used to declare a variable with block scope.
// d is the variable that holds the reference to the new Date object.
// The word new:
//   - Creates a new, empty object.
//   - Sets the new object's prototype to Date.prototype.
//   - Binds this to the new object within the Date constructor function.
//   - The Date constructor initializes the new object to represent the current date and time.
//   - Returns the newly created Date object and assigns it to the variable d.
// alert is a function that displays an alert dialog with the specified message, in this case, the current date and time stored in d.

// Use the correct Date method to extract the year (four digits) out of a date object.
const y = new Date();
year = y.getFullYear();

// MATH

// Use the correct Math method to create a random number.
let r = Math.random();

// Use the correct Math method to return the largest number of 10 and 20.
let x = Math.max(10, 20);
console.log(x);

// Use the correct Math method to round a number to the nearest integer.
let z = Math.round(5.3);
console.log(z);

// COMPARISONS

// Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
alert(x > y);

// Choose the correct comparison operator to alert true, when x is equal to y.
x = 10;
y = 10;
alert(x == y);

// Choose the correct comparison operator to alert true, when x is NOT equal to y.
x = 10;
y = 5;
alert(x != y); // ! is the log
// ! operator is a logical NOT operator
// console.log(!true);  // Output: false
// console.log(!false); // Output: true

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var age = n;
var voteable = (age < 18) ? "Too young" : "Old enough";
alert(voteable);

// CONDITIONS

// Fix the if statement to alert "Hello World" if x is greater than y.
if (x > y) {
  alert("Hello World");
} 

// Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".
let a = 10; // Example value for x
let b = 5;  // Example value for y

if (a > b) {
    console.log("Hello World"); // Logs "Hello World" to the console
} else {
    console.log("Goodbye"); // Logs "Goodbye" to the console
}

// SWITCH

// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
switch (fruits) {
case "Banana":
     alert("Hello")
     break;
case "Apple":
     alert("Welcome")
     break;    
 }

 // Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
 switch(fruits) {
    case "Banana":
      alert("Hello")
      break;
    case "Apple":
      alert("Welcome")
      break;
    default:
      alert("Neither");
  }

// FOR LOOPS

let i; // Declare a variable i, which will be used as a counter in the loop.

for (i = 0; i < 10; i++) { // Loop setup:
    // i = 0: Initialize i to 0 at the start.
    // i < 10: Continue the loop as long as i is less than 10.
    // i++: Increment i by 1 after each loop iteration.
    
    console.log(i); // Log the current value of i to the console.
}

// Create a loop that runs through each item in the fruits array.
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

// WHILE LOOPS

// Create a loop that runs as long as i is less than 10.
let o = 0;
while (o < 10) {
  console.log(o);
  o++
}

// Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
let p = 0;
while (p < 10) {
  console.log(p);
  p = p + 2;
}

// Use a for loop when you know the number of iterations or are working with a predictable sequence.
// Use a while loop when the condition to stop the loop depends on factors that could change dynamically or aren’t predetermined.

// BREAK LOOP

// Make the loop stop when i is 5.
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
      break;
    }
  }