// 3. Mini Project: FizzBuzz Game
// For today's project, let's create a popular programming challenge called FizzBuzz. The program will print numbers from 1 to 100, but:

// For numbers divisible by 3, it prints "Fizz".
// For numbers divisible by 5, it prints "Buzz".
// For numbers divisible by both 3 and 5, it prints "FizzBuzz".

console.log("Welcome to our FizzBuzz Game... Thanks for Playing!!!")

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
    }else if (i % 3 === 0) {
        console.log("Fizz");
    }else if (i % 5 === 0) {
        console.log("Buzz");
    }else{
        console.log(i);
    }
}








