// Day 3: Operators in JavaScript


// Unary Operators
// Unary operators work on one operand.

// Unary plus (+): Converts a value into a number.
// Unary negation (-): Converts a value into a number and negates it.


let x = 5;
let y = +x;   // converts string "5" to number 5
console.log(y);
console.log(typeof y);


console.log(typeof String(y));  // converting back to string



// Ternary Operator
// The ternary operator (condition ? expression1 : expression2) is a shorthand for if-else.
let age = 18;
let access = (age >= 18) ? "Granted" : "Denied";
console.log(access, "\n\nI am the new boy on the block, watch out!!!\n");

// code samples 

//Arithmetics
let num1 = 10;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// compare Operators

let a = 5;
let b = "5";
console.log(a == b);    // true (CHECks both values, not type)
console.log(a === b);   //false (checks both values and type)


//logical Operators 
let isLoggedIn = true;
let hasPremiumAccount = false;
console.log(isLoggedIn && hasPremiumAccount);   // will only be true when the two conditions are true!!!!
console.log(isLoggedIn || hasPremiumAccount);  // if one is true then the result is true!!!!

// Assignment Operators

let c = 10;
c += 5; // Equivalent to c = c + 5
console.log("\n\n", c); 


// Ternary Operator
let ageNow = 20;
let canVote = (ageNow >= 18) ? "Yes" : "No";
console.log(canVote)


