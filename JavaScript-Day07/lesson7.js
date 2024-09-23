console.log("Using Array Literal - most common")
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

console.log("Using Array constructors")
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

console.log("Array Indexing")
const colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[2]);


console.log("Updating Array items");
colors[1] = "yellow";
console.log(colors); // Output: ["red", "yellow", "blue"]

console.log("Manipulating Array: push, pop, shift, unshift, slice, splice, join");
console.log("push")
const arr0 = [1, 2, 3];
arr0.push(4);
console.log(arr0);

console.log("pop")
const arr1 = [1, 2, 3];
arr1.pop();
console.log(arr1); // Output: [1, 2]

console.log("shift")
const arr2 = [1, 2, 3];
arr2.shift();
console.log(arr2); // Output: [2, 3]

console.log("unshift")
const arr3 = [1, 2, 3];
arr3.unshift(0);
console.log(arr3); // Output: [0, 1, 2, 3]


console.log("slice")
const arr4 = ["a", "b", "c", "d"];
const slicedArr = arr4.slice(1, 4);// doesn't get too the last indices the upper range
console.log(slicedArr); // Output: ["b", "c"]

console.log("join");
const arr5 = ["Hello", "World", "Abioye is here!"];
const str = arr5.join(" ");
console.log(str); // Output: "Hello World"


console.log("Looping through Arrays\n\n");

const numbs = [10, 20,30];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
}


console.log("how you forEach")
const numbs1 = [10, 20, 30];
numbs1.forEach(function(number) {
    console.log(number);
})

console.log("how you for ... of")
const num = [10, 20, 30];
for (let number of num) {
    console.log(number);
}



console.log("\nArray Methods for Functional Programming")

console.log("Using map()")
const a_number = [1, 2, 3];
const square = a_number.map(function (num) {
    return num * num;
});


console.log("\n Using filter()")
const b_numbers = [1, 2, 3, 4];
const evenNumbers = b_numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]


console.log("\n Using reduce()")
const c_numbers = [1, 2, 3, 4];
const sum = c_numbers.reduce(function(total, num) {
    return total + num;
});
console.log(sum); // Output: 10




console.log("\n Working with Multidimensional Arrays (Arrays of Arrays)")
// You can create arrays of arrays (multidimensional arrays) 
// to represent more complex data structures like matrices.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; // the 0 picks the row and the 1 is for the column
console.log(matrix[0][1]); // Output: 2


console.log("\nArray Operations");

//Array declaration
const fruits_ = ["Apple", "Banana", "Orange"];

// Add an element to the end
fruits.push("Mango");
console.log(fruits_); // Output: ["Apple", "Banana", "Orange", "Mango"]

// Remove the last element
fruits.pop();
console.log(fruits_); // Output: ["Apple", "Banana", "Orange"]

// Remove the first element
fruits.shift();
console.log(fruits_); // Output: ["Banana", "Orange"]

// Add an element to the beginning
fruits.unshift("Grapes");
console.log(fruits_); // Output: ["Grapes", "Banana", "Orange"]

// Loop through array
fruits_.forEach(function(fruit, index) {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

// Filter example
const numbers_ = [1, 2, 3, 4, 5];
const evenNumbers_ = numbers_.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers_); // Output: [2, 4]










