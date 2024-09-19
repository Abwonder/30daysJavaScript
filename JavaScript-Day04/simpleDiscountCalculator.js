// 3. Mini Project: Simple Discount Calculator
// For today's project, we will create a simple discount calculator. 
// The user will enter the total amount and their membership status (
// e.g., Gold, Silver, or None). Based on their status, they will receive different discounts.

const readline = require("readline");

// Building interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Function to calculate discount
function calculateDiscount(amount, membership) {
    let discount;   // this is declaring empty variable

    if (membership === "Gold") {
        discount =  0.2; // 20% discount
    }else if (membership === "Silver") {
        discount = 0.1;
    }else {
        discount = 0; // No discount
    }

    const finalAmount = amount - (amount * discount);
    return finalAmount
}

// Prompt User for input
rl.question("Enter the total amount: ", function(amount){
    rl.question("Enter your membership status (Gold/Silver/None): ", function(membership){
        const totalAmount = parseFloat(amount);
        const finalAmount = calculateDiscount(totalAmount,membership);

        console.log(`Final amount after discount: ${finalAmount.toFixed(2)}`);

        rl.close(); //close the input stream
    })
})