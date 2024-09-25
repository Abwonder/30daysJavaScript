console.log("Factory Functions and Constructors:")
function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    };
}

const myCar = createCar("Toyota", "Camry", 2020);
console.log(myCar); // Output: { make: 'Toyota', model: 'Camry', year: 2020 }

console.log("\nConstructor Function")
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const NewmyCar = new Car("Honda", "Accord", 2018);
console.log(NewmyCar); // Output: Car { make: 'Honda', model: 'Accord', year: 2018 }


console.log("\nJSON (JavaScript Object Notation)")
const person = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: '{"name":"Alice","age":25}'

const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson); // Output: { name: 'Alice', age: 25 }







