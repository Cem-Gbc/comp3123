// COMP 3123 - Full Stack Development I - Lab 2
// ES6 Practice Exercises
// Cem Dudu - 101496484

// =========================================================
// Exercise 1: Rewrite using const, let, arrow function,
//             template literals and for..of
// =========================================================
const gretter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};

console.log('--- Exercise 1 ---');
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// =========================================================
// Exercise 2: Capitalize the first letter of a string using
//             destructuring and the spread operator
// =========================================================
const capitalize = ([first, ...rest]) =>
    `${first.toUpperCase()}${rest.join('').toLowerCase()}`;

console.log('\n--- Exercise 2 ---');
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// =========================================================
// Exercise 3: Use map with the capitalize method from Ex. 2
// =========================================================
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));

console.log('\n--- Exercise 3 ---');
console.log(capitalizedColors);

// =========================================================
// Exercise 4: Use filter to keep values less than twenty
// =========================================================
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value < 20);

console.log('\n--- Exercise 4 ---');
console.log(filterLessThan20);

// =========================================================
// Exercise 5: Use reduce for sum and product
// =========================================================
const array = [1, 2, 3, 4];
const calculateSum = array.reduce((total, current) => total + current, 0);
const calculateProduct = array.reduce((total, current) => total * current, 1);

console.log('\n--- Exercise 5 ---');
console.log(calculateSum);
console.log(calculateProduct);

// =========================================================
// Exercise 6: class, extends and super
// =========================================================
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

console.log('\n--- Exercise 6 ---');
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

// Subclass - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
