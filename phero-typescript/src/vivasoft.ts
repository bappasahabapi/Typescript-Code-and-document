// console.log("fucntioin");


class Animal {
    move(distanceInMeters: number = 0) {
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
    greeting: string;
    constructor(message: string)
    {
       this.greeting = message;
    }
    greet()
    {
    return 'Hello, ' + this.greeting;
   }
 }


 
 let greeter = new Greeter('world');
 console.log(greeter.greet);











function greeting(message:string):void{
    console.log(message);
}

const sms =greeting("hello foo bar");
// console.log(sms)

// Use of optional chaining
function fullName(fname:string, lname?:string){
    if(lname) return fname +''+lname;
    else return fname;
}
let testName = fullName('bappa');
console.warn(testName);

// setting defult parameter

function defultparameter(fname:string, lname='saha'){
    return fname+ ' '+lname;
}
const test2 = defultparameter('bapida-');
console.log(test2);

// Rest parameter

function restParameter(fname:string, ...restName:string[]){
    return fname+ ''+restName.join('');
}
const test3 = restParameter('bapida-','dapida-','tupida');
console.log(test3);



//parameter destructing

type obj= {
    a:number;
    b:number;
    c:number;
}
function addition({a,b,c}:obj){
    console.log(a+b+c);
}








