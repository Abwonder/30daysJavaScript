console.log("\nCreating Objects\nObject Literal Syntax")
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
};


console.log("\nIn this example, the object person has four properties: firstName, lastName, age, and isStudent.")

const car = new Object();// this defines object creation
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;


console.log("\nAccessing Object Properties\nDot Notation:");
console.log(person.firstName);  // Output: John
console.log(person.age);        // Output: 30

console.log("\nAccessing Object Properties\nBracket Notation:");
console.log(person["lastName"]);  // Output: Doe
console.log(person["isStudent"]); // Output: false

console.log("\nModifying Object Properties");

console.log("Updating Properties:");
person.age = 31;
console.log(person.age); // Output: 31

console.log("\nAdding Properties:");
person.gender = "male";
console.log(person.gender); // Output: male

console.log("\nDeleting Properties:");
delete person.isStudent;
console.log(person.isStudent); // Output: undefined


console.log("\n\nMETHODS IN OBJECTS")
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6

// const mod_calculator = {
//     add: function(a,b) {
//         return a + b;
//     },
//     subtract: function(a,b) {
//         return a - b;
//     } 
// }
// console.log(mod_calculator.add(5,3));
// console.log(mod_calculator.subtract(5,3));


console.log("\nSimpler Ways to do this using the ES6!!!")
console.log("You can simplify method definitions (introduced in ES6) by omitting the function keyword:");
const calculatorNew = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
console.log(calculatorNew.add(5, 3));      // Output: 8
console.log(calculatorNew.subtract(10, 4)); // Output: 6

console.log("\nthis Keyword in Objects - Let's learn how to use this")
const newPerson = {
    firstName: "Jane",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(newPerson.fullName()); // Output: Jane Doe


console.log("\nLooping through Object Properties");
const book = {
    title: "JavaScript for Beginners",
    author: "John Doe",
    year: 2021
};

for (let key in book) {
    console.log(key + ": " + book[key]);
}

// Output:
// title: JavaScript for Beginners
// author: John Doe
// year: 2021


console.log("\nNested Objects:");
const user = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};

console.log(user.address.city); // Output: Wonderland


console.log("\nDestructuring Objects");
const carModel = {
    make: "Tesla",
    model: "Model S",
    year: 2022
};

const { make, model } = carModel;
console.log(make);  // Output: Tesla
console.log(model); // Output: Model S


console.log("\nObject Operations");
// Object creation and property access
const dog = {
    breed: "Golden Retriever",
    age: 3,
    isFriendly: true
};

console.log(dog.breed); // Output: Golden Retriever

// Adding new properties
dog.name = "Buddy";
console.log(dog.name);  // Output: Buddy

// Methods and `this` keyword
const rectangle = {
    width: 10,
    height: 20,
    area: function() {
        return this.width * this.height;
    }
};

console.log(rectangle.area());  // Output: 200

// Looping through object properties
for (let key in dog) {
    console.log(`${key}: ${dog[key]}`);
}

// Destructuring
const { breed, age } = dog;
console.log(`Breed: ${breed}, Age: ${age}`); // Output: Breed: Golden Retriever, Age: 3








