const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Function to perform the calculation
function calculate(num1, num2, operator){
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operator";

    }
    return result;
}


// prompt User for Inputs
rl.question("Enter the first number: ", function(firstNumber){
    rl.question("Enter the second number: ", function(secondNumber){
        rl.question("Choose operation (+, -, *, /): ", function(operator){
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);

            const result = calculate(num1, num2, operator);
            console.log(`Result: ${result}`);

            rl.close(); // close the input stream
        })
    })
})

