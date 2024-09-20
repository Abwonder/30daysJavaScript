// Related Tools, Libraries, and Practices for Better Learning
// Use Array.prototype.forEach(): JavaScript arrays come with a built-in 
// method called forEach() that allows you to loop 
// through arrays more conveniently.

// git
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
})


// nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; i++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

