// 1. Deep Explanation: Loops in JavaScript
// In programming, loops allow you to repeat a block of code multiple times. JavaScript provides several types of loops that you can use to automate repetitive tasks. The most common types of loops are:

const { Console } = require("console");

// for Loop: Repeats a block of code a specific number of times.
// while Loop: Repeats a block of code while a condition is true.
// do...while Loop: Similar to the while loop, but it guarantees that the code block will execute at least once.
// for...in Loop: Iterates over the properties of an object.
// for...of Loop: Iterates over iterable objects like arrays or strings.


// Basic Syntax for for loop
// for (initailiation, condtition, increment) {
//     //code block to be executed
// }

console.log("Example one, for loop")

for (let i=0; i < 5; i++){
    console.log("Iteration number; ", i);
}



// While loop
console.log("Example TWo, While Loop")
// while (Condition){
//     // code of block to run
// }

let counter = 0; 

while (counter < 5){
    console.log("counter: ", counter);
    counter++;
}

// do...while Loop
// The do...while loop is similar to the while loop, but the condition is checked after the 
// code is executed. This ensures the loop runs at least once, even if the condition is 
// false initially.

//Basic syntax
// do {
//     //code to execute atleast once
// }while(condition);


console.log("Example for do ... while loop")

let i = 0;

do {
    console.log("i is: ", i);
    i++;
}while(i<5);



console.log("EXample for for ....in  loop");
//basic syntax

// for (key in object) {
//     // code to execute
// }


const persons = {name: "John", age: 30, city: "New York"};

for (let key in persons) {
    console.log(key, ":", persons[key])
}

console.log("\nSecond method of writing the code!!!\n")
for (let key in persons) {
    console.log(`${key} : ${persons[key]}`)
}


console.log("Example for for....of loop");

// basic syntax

// for (key in iterable) {
//     // code to execute
// }


const numbers = [10, 20, 30, 40, 50];

for (let number of numbers){
    console.log(number)
}



// Breaking and Continuing Loops
// break: Exits the loop immediately, regardless of the loop condition.
// continue: Skips the current iteration and moves to the next one.


console.log("Sample code that uses break and continue!!!")
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        break;  // Exit the loop when i is 5
    }
    console.log(i);
}


for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);  // Only prints odd numbers
}





console.log("Conde Exercise of the day!!!")
// Example 1: for loop
for (let i = 1; i <= 5; i++) {
    console.log("Counting: ", i);
}

// Example 2: while loop
let j = 1;

while (j <= 5){
    console.log("Counting with while: ", j);
    j++;
}


//Example 3: do... while loop
let k = 1;

do {
    console.log("Counting with do .... while: ", k);
    k++;
}while (k <= 5);

//Example 4: for .... in loop (for object)
const user = {name: "Alice", age: 25, Job: "Developer"};
for  (let property in user) {
    console.log(property, ":" , user[property]);
}

// Example 5: for .... of loop (for arrays)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Colors: ", color);
}





