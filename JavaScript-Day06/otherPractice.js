console.log("Function Composition")
function double(x){
    return x * 2;
}

function square(x){
    return x * x;
}

function doubleThenSquare(x){
    return square(double(x));
}
console.log(doubleThenSquare(3)); //output: 36



console.log("PureFunction")
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(4,18));


console.log("Arrow function");
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); //Output: [2, 4, 6, 8]





console.log("Recursion");
function factorial(n) {
    if (n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120



