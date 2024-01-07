"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this.balance += amount;
    }
}
// //TODO: Creating obj using this 'Account' class
let accObj = new Account("1", "kappa", 0);
accObj.deposit(200);
console.log(typeof accObj);
console.log(accObj instanceof Account);
console.log(accObj);
console.log(accObj.balance);
//# sourceMappingURL=index.js.map