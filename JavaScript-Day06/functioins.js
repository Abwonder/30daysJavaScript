// There are two main types of functions in JavaScript:

// Function Declarations: Traditional way of declaring functions.
// Function Expressions: Functions can also be defined as expressions and stored in variables.

// Basic Syntax
// function functionname(parameters){
//     // code to execute
// }



console.log("Example - Declarative Functions - \n")

function greet(name){
    return "Hello, " + name + "!";
}
console.log(greet("John"));  // output:


console.log("Example - Function Expression \n")

// Basic Syntax:

// const functionName = function(parameters) {
//     // Code to execute
// };


const add = function (a,b){
    return a + b;
}
console.log(add(10, 40));


// Arrow Functions (ES6)
// Arrow functions provide a more concise way to write functions and are 
// especially useful in scenarios like callbacks and array methods. Arrow 
// functions also have a different behavior when it comes to the this keyword.

console.log("Example - Arrow functions and usage \n")

// Basic Syntax:

// const functionName = (parameters) => {
//     // Code to execute
// };

// if we have only one statment then the braces can be ommited as shown below:

const square = (x) => x * x;
console.log(square(5));

const multiply = (a, b) => a * b;
console.log(multiply(5, 4)); // notice we did not use return function here


console.log("Example - Parameter and Auguments \n")

function greet(name="Guest"){
    return "Hello, " + name + "!";
}
console.log(greet()); // the default argument will be printed out
console.log(greet("Abioye")); // The arugument I entered here will be displayed


console.log("Example - Return Values\n")

function subtract(a, b) {
    return a - b; // whatever comes after return in a function will not be executed
    console.log("This will not be executed.");
}

console.log(subtract(10, 4)); // Output: 6


console.log("Example - Anonymous functions \n")

setTimeout(function() {
    console.log("This will run After 3 seconds.")
}, 3000); // Note this it will be required in server side coding i am sure
// not you dont need to call it, it will run 



console.log("Higher Order Functions")
function processArray(arr, callback){
    for (let i=0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
processArray([1, 2, 3], function(number){
    console.log(number*2);
});




console.log("Code Practice for the day!!!");

//function Decaration

function sayHello(name){
    return "Hello, "+name+"!";
}
console.log(sayHello("Abioye"));// output is hello, Abioye!!!!

//Function Expression
const divide = function(a, b) {
    return a/b;
}

// Arrow Function

const doSquare = (x) => x * x;
console.log(doSquare(6));

// higher
// Higher-Order Function with callback
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num * num));  // Output: 1, 4, 9, 16, 25



















