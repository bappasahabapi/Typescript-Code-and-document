


//todo: 1. keyof guard --> works at runtime

type Alphanumerics = string | number;

function add(param1: Alphanumerics, param2: Alphanumerics): Alphanumerics {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

add('3','5');
add(1,4);



//todo: 2. in guard --> used in object

type NormalUser ={
    name:string;
};

type AdminUser ={
    name:string;
    role: string;
};

function getUser(user:NormalUser |AdminUser){
    if('role' in user){
        return `I am a ${user.name} user and my role is ${user.role}`;
    }else{
        return `I am a normal user named  ${user.name} `;
    }
}

const normalUser1: NormalUser ={name:'bappa'};
const adminUser1:AdminUser ={name:'admin',role:'admin'};

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));


//todo: 3. instance of guard --> used in object

class Animals{
    name:string;
    species:string;

    constructor(name:string,species:string){
        this.name=name;
        this.species=species;
    }

    makeSound(){
        console.log('I am making some sound');
    }
}

class Dog extends Animals{
    constructor(name:string, species:string){
        super(name,species);
    }
    makeBarking(){
        console.log("Dog is barking");
    }
}
class Cat extends Animals{
    constructor(name:string, species:string){
        super(name,species);
    }
    makeMeawing(){
        console.log("Cat is meawing");
    }
}


// we can also do this by using function

function isDog(obj:Animals):obj is Dog{
    return obj instanceof Dog
}

function getAnimal(obj:Animals){
    // use type guard
    // if(obj instanceof Dog){
    //     obj.makeBarking()
    // }
    if(isDog(obj)){
        obj.makeBarking()
    }
    else if(obj instanceof Cat){
        obj.makeMeawing();
    }else{
        obj.makeSound();
    }

}

// we can also do this by using function

// function isDog(obj:Animals):obj is Dog{
//     return obj instanceof Dog
// }

const animals1=new Dog('jarman-shepard','dog'); // instance of dog
const animals2=new Cat('puchu-family','cat');   // instance of cat

getAnimal(animals1);
getAnimal(animals2);




