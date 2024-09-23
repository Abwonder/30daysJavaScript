console.log("Destructuring Arrays: Extract values from arrays in a more readable way.")

const [first, second] = ["Apple", "Banana", "Orange"];
console.log(first); // Output: Apple
console.log(second); // Output: Banana

console.log("\n\nArray.prototype.some(): Checks if at least one element in the array meets a condition.")
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

console.log("\nArray.prototype.every(): Checks if all elements in the array meet a condition.");
const pnumbers = [2, 4, 6];
const allEven = pnumbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true


