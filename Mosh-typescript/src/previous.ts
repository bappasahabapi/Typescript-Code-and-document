// let age:number=10;
// if(age<50){
//     age+=10;
//     console.log(age);
// }

//TODO: Variables 
let sales = 123_7809_7987;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1
level = 'a'

//TODO: Functions
function render(document: any) {
    console.log(document)
}



//TODO: Arrays

let numbers: number[] = [1, 2, 3];
let numbers1 = [1, 2, '3a'];

let digits: number[] = [];
// digits.forEach(n=>{})

//TODO: Tuples: is used for storing two values

let user: [number, string] = [1, 'Kappa']

//TODO: Enums

// const small =1;
// const medium =2;
// const large =3;


//PascalCase
const  enum Size { Small = 1, Medium, Large };

let mySize: Size = Size.Medium;
// console.log(mySize)


//TODO: Functions

function calculateTax(income: number, taxYear=2022): number {
    // let x;
    if ((taxYear ) < 2022) {
        return income * 1.5;
    }
    return income * 1.2;
}

calculateTax(11, 2023);


//TODO: Objects:

let employee :{
    readonly id: number,
    name: string,
    retire: (date:Date)=>void
} ={id:1, name:'Aida',retire:(date:Date)=>{
    console.log(date);
    
}};

employee.name='Papa'
// employee.id=0;


//TODO: ➡️ Type aliases


type Employee ={
    readonly id: number,
    name: string,
    retire: (date:Date)=>void
}

let user1:Employee={
    id:1,
    name:'bangladesh',
    retire(date) {
        console.log(date);
        
    },
}


//TODO:  ➡️ Unions 
function kgToLbs(weight:number |string):number{
    //Narrowing
    if (typeof weight==='number') {
       return weight *1.1;
    }
    else{
       return parseInt(weight)*5.5;
    }
}

kgToLbs(10);
kgToLbs('10kg');

//TODO:  ➡️ intersections

type Draggable={
    drag: ()=>void
}

type Resizable ={
    resize: ()=> void;
}

type UIWidget = Draggable & Resizable

let texBox:UIWidget={
    drag() {},
    resize() {},
}

//TODO:  ➡️ Literal Types

// let quantity: 50| 100 =100;

type Quantity=50 |100|20;
let quantity:Quantity=100


function greet(name:string |null|undefined){
    if(name)
      console.log(name.toUpperCase());
    else
        console.log('null or undefined')
    
}
greet(null);
greet(undefined)
greet('there is a boy name bappa');


//TODO: Optional Chaining

type Customer ={
    name:string,
    age?:number,
    birthday:Date
}

function getCustomer(id:number):Customer|null |undefined{
    return id===0 ? null : {
        name: 'bappa',
        birthday:new Date()
    }
}

// let customer =getCustomer(0)
let customer =getCustomer(1)

console.log(customer?.name,  customer?.birthday);



let phone =<HTMLInputElement>document.getElementById('phone')



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
