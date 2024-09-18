const readline = require("readline"); //to import the library readline

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Declare variables to store user data
let userName;
let useAge;
let isStudent;

rl.question("What is your name? ", function(name){
    userName = name; // Assign user input to the variable

    rl.question("What is your age? ", function(age){
        useAge = age; // assigning again

        rl.question("Are you employed? (yes/no) ", function(studentStatus){
            isStudent = studentStatus.toLowerCase() === "yes"; // convert the input to boolean

            //print the formatted profile 
            console.log("\nUser Profile:")
            console.log("Name:", userName);
            console.log("Age: ", useAge);
            console.log("Is Student: ", isStudent);


            rl.close(); //close the input stream
        });
    });
});