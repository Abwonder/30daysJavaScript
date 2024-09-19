// Basic Syntax

// if (condition){
//     // Executes if condition is met
// }else if (anothercondition){
//     //Executes if the first condition is false and this condition is true!!!
// }else{
//     // Executes if all the above conditions are false
// }


let age = 20;

if (age < 13) {
    console.log("You're a child.");
}else if (age >= 13 && age < 20) {
    console.log("you're a teenager.");
}else{
    console.log("You're an adult now");
}


// let's apply what we are learning

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid Input")
}



// truthy and falsy values
// Falsy values: false, 0, '' (empty string), null, undefined, NaN
// Truthy values: Everything else (non-zero numbers, non-empty strings, arrays, objects, etc.)

let value = 1;

if (value){
    console.log("This will not run because 0 is equal to false");
}else{
    console.log("This will run because 0 is false");
}


//  Control flow in Action
// Simple if-else statment

let temperature = 30;

if (temperature > 25 ) {
    console.log("It's hot outside");
}else{
    console.log("It's cold outside");
}



// Example 2: Multiple conditions using else if
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
}else if (score >= 80) {
    console.log("Grade: B");
}else if (score >= 70) {
    console.log("Grade: C");
}else {
    console.log("Grade: F");
}

console.log("Example Three")

// Example 3: switch statements
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apples are $1.00 per pound.");
        break;
    case "banana":
        console.log("Bananas are $0.50 per pound.");
        break;
    case "cherry":
        console.log("Cherries are $3.00 per pound.");
        break;
    default:
        console.log("Sorry, we don't have that fruit.")
}



