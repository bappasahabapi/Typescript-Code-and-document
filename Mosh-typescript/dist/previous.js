"use strict";
// let age:number=10;
// if(age<50){
//     age+=10;
//     console.log(age);
// }
//TODO: Variables 
let sales = 12378097987;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
level = 'a';
//TODO: Functions
function render(document) {
    console.log(document);
}
//TODO: Arrays
let numbers = [1, 2, 3];
let numbers1 = [1, 2, '3a'];
let digits = [];
// digits.forEach(n=>{})
//TODO: Tuples: is used for storing two values
let user = [1, 'Kappa'];
;
let mySize = 2 /* Medium */;
// console.log(mySize)
//TODO: Functions
function calculateTax(income, taxYear = 2022) {
    // let x;
    if ((taxYear) < 2022) {
        return income * 1.5;
    }
    return income * 1.2;
}
calculateTax(11, 2023);
//TODO: Objects:
let employee = { id: 1, name: 'Aida', retire: (date) => {
        console.log(date);
    } };
employee.name = 'Papa';
let user1 = {
    id: 1,
    name: 'bangladesh',
    retire(date) {
        console.log(date);
    },
};
//TODO:  ➡️ Unions 
function kgToLbs(weight) {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 1.1;
    }
    else {
        return parseInt(weight) * 5.5;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let texBox = {
    drag() { },
    resize() { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('null or undefined');
}
greet(null);
greet(undefined);
greet('there is a boy name bappa');
function getCustomer(id) {
    return id === 0 ? null : {
        name: 'bappa',
        birthday: new Date()
    };
}
// let customer =getCustomer(0)
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.name, customer === null || customer === void 0 ? void 0 : customer.birthday);
let phone = document.getElementById('phone');
// class Account {
//     id: string;
//     owner: string;
//     balance: number;
//     constructor(id: string, owner: string, balance: number) {
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }
//     deposit(amount: number): void {
//         if (amount <= 0) {
//             throw new Error("Invalid Amount");
//         }
//         this.balance += amount;
//     }
// }
// //TODO: Creating obj using this 'Account' class
// let accObj =new Account("1","kappa",0)
// accObj.deposit(200);
// console.log(accObj.balance);
//# sourceMappingURL=previous.js.map