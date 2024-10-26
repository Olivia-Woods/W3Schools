// VARIABLES

// Create a variable called vehicleName, assign the value "Volvo" to it.
let vehicleName = "Volvo";

// Display the sum of 5 + 10, using two variables: num1 and num2.
let num1 = 5;
let num2 = 10;
document.getElementById("demo").innerHTML = num1 + num2;

// Create a variable called total, assign num1 + num2 to it, and display the result in an alert box.
let total = num1 + num2;
alert(total);

// On one single line, declare three variables with the following names and values:
let userFirstName = "Olivia", userLastName = "Woods", userAge = 26;

// OPERATORS
// + - / 

// DATA TYPES

// Use comments to describe the correct data type of the following variables:
let lengthExample          = 16;                // Number
let lastNameExample        = "Johnson";         // String
const personObj           = {
    firstName: "John",
    lastName:  "Doe"
};                                                // Object

// FUNCTIONS

// Execute the function named greetUser.
function greetUser() {
    alert("Hello World!");
}
greetUser();

// Create a function called "greetUser".
function greetUser() {
    alert("Hello!");
}

// Make the function return "Hello".
function returnHello() {
    return "Hello";
}
document.getElementById("demo").innerHTML = returnHello();

// Make the function display "Hello" in the inner HTML of an element with the ID "demo".
function displayHello() {
    document.getElementById("demo").innerHTML = "Hello";
}

// OBJECTS

// Alert "John" by extracting information from the person object.
let personInfo = {
    firstName: "John",
    lastName:  "Doe"
};
alert(personInfo.firstName);

// Add the following property and value to the individual object: country: "Norway".
let individual = {
    firstName: "John",
    lastName:  "Doe",
    country:   "Norway" 
};

// Create an object called individualInfo with name = "Nick" and age = 50. 
// Then, access the object to alert("Nick is 50").
let individualInfo = {
    name: "Nick",
    age:  50
};
alert(individualInfo.name + " is " + individualInfo.age);

// EVENTS

// The <button> element should do something when someone clicks on it.
// <button onclick="alert('Hello')">Click me.</button>

// When the button is clicked, the function "myFunction" should be executed.
function myFunction() {
    alert('Hello');
}
// <button onclick="myFunction()">Click me.</button>

// The <div> element should turn red when someone moves the mouse over it.
<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>

// STRINGS

// Use the length property to alert the length of greeting.
let greeting        = "Hello World!";
let greetingLength  = greeting.length;
alert(greetingLength);

// Concatenate the two strings to alert "Hello World!".
let part1 = "Hello ";
let part2 = "World!";
alert(part1 + part2);

// STRING METHODS

// Convert the text into UPPERCASE text:
let text      = "Hello World!";
text          = text.toUpperCase();
alert(text);

// Use the slice method to return the word "bananas".
let fruitText   = "I can eat bananas all day";
let slicedFruit = fruitText.slice(10, 17);

// Use the correct String method to replace the word "Hello" with the word "Welcome".
let txt = "Hello World";
txt     = txt.replace("Hello", "Welcome");

// ARRAYS 

// Get the value "Volvo" from the cars array.
const carBrands1   = ["Saab", "Volvo", "BMW"];
let selectedCar1   = carBrands1[1]; // "Volvo"

// Change the first item of cars to "Ford".
const carBrands2   = ["Volvo", "Jeep", "Mercedes"];
carBrands2[0]     = "Ford"; // First item is now "Ford"

// Alert the number of items in an array, using the correct Array property.
const carBrands3   = ["Volvo", "Jeep", "Mercedes"];
alert(carBrands3.length); // Alerts the number of items in the array

// ARRAY METHODS

// Use the correct Array method to remove the last item of the fruits array.
const fruits1 = ["Banana", "Orange", "Apple"];
fruits1.pop(); // pop is the Function. It removes "Apple" from fruits1.

// Use the correct Array method to add "Kiwi" to the fruits array.
const fruits2 = ["Banana", "Orange", "Apple"];
fruits2.push("Kiwi"); // Adds "Kiwi" to the end of fruits2.

// Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits3 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits3.splice(1, 2); // Removes "Orange" and "Apple" from fruits3.

// Use the correct Array method to sort the fruits array alphabetically.
const fruits4 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits4.sort();