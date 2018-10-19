// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Paul',
    cities: ['Portsmouth', 'Durham', 'Lee'],
    // Using ES5 function here allows the function to use "this" as the user object, if we converted this to an arrow function it would go up to the global scope.
    // However the ES6 definition of an es5 function looks as if it's a function call itself. See below for example
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // Turning this into an arrow function allows us to have access to the user object using the 'this' keyword as arrow functions do not have an ownus scope
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers we want to multiply
    numbers: [1, 2, 6, 10],
    // multiplyBy - single number
    multiplyBy: 2,
    // multiply - return new array where the numbers have been multiplied
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());