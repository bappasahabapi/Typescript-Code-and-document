"use strict";
// console.log("fucntioin");
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog();
console.log(dog.bark());
console.log(dog.move(10));
dog.bark(); // print: Woof! Woof!
dog.move(10); // print: Animal moved 10m.
dog.bark(); // print: Woof! Woof!
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
let greeter = new Greeter('world');
console.log(greeter.greet);
function greeting(message) {
    console.log(message);
}
const sms = greeting("hello foo bar");
// console.log(sms)
// Use of optional chaining
function fullName(fname, lname) {
    if (lname)
        return fname + '' + lname;
    else
        return fname;
}
let testName = fullName('bappa');
console.warn(testName);
// setting defult parameter
function defultparameter(fname, lname = 'saha') {
    return fname + ' ' + lname;
}
const test2 = defultparameter('bapida-');
console.log(test2);
// Rest parameter
function restParameter(fname, ...restName) {
    return fname + '' + restName.join('');
}
const test3 = restParameter('bapida-', 'dapida-', 'tupida');
console.log(test3);
function addition({ a, b, c }) {
    console.log(a + b + c);
}
