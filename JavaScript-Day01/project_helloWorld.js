// Importing the readline module to capture user input
const readline = require("readline");

// Creating an interface for user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their name
rl.question("What is your name? ", function(name) {
    // Print a personalized greeting
    console.log(`Hello, ${name}! Welcome to JavaScript learning.`);

    // Close the input stream
    rl.close();
});