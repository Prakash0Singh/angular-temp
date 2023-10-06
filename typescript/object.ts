console.log("Hello world in js");

// ********************** 'Interface' in TypeScript
// Interfaces are similar to 'type', except they only apply to object types.
interface userType{ 
    name:string,
    code:number,
    branch?:string,
    login:boolean
} 
// ********************** 'Type' in TypeScript
type userType2={name:string,code:number,branch?:string,login:boolean}

// ********************** 'Objects' in TypeScript

// ways to declare objects in Typescript

const car:{type:string,model:string,year:number}={
    type:"CAR",
    model:"BMW",
    year:1999
}

let user :userType2={
    name:"admin",
    code:1221,
    login:true,
}
let user1 :any={
    name:"admin",
    code:1221,
    branch:"IT",
    login:true,
}
user1['codeName']="Hello worlds" //adding new property
user1.city="Jaipur"
console.log(car);
console.log(user);
console.log(user1);

const activeUser={
    name:"prakash",
    email:"prakash@gmail.com",
    isAval:true
}

// function createUser({name:string,isPaid:boolean}) {}

// createUser({name:"prakash",isPaid:true});

// function returning object
function createUser():{name:string,price:number} {
    return {name:"Prakash",price:1000}
}
console.log(createUser());

// using multiple 'type' 

type cardName={
    cardName:string
}
type cardNumber={
    cardNumber:number
}
type cardDetails= cardName & cardNumber &{
    cardCvv:number
}

const userCard :cardDetails={
    cardName:"prakash singh",
    cardNumber:123423583409,
    cardCvv:234
}
console.log(userCard);

// *************** We Can also use Union in 'type' in TypeScript

type testingUser={
    name:string
    id:number
}
type superAdmin={
    username:string
    id:number
}

let prakashSingh:testingUser | superAdmin ={
    name:"testingUser",
    id:29301
}

console.log(prakashSingh)

prakashSingh={
    username:"superadmin",
    id:12345
}
console.log(prakashSingh);