//Basic type in  TypeScript
console.log("Basic Type in TypeScript");

// Explict Type define in TypeScript
let A:number;
A=10;
console.log(A);

// Implict Type define in TypeScript
let B="TypeScript Provide Types in JavaScript."
console.log(B);
// B=12;

// Object Type in TypeScript 
console.log("Object In TypeScript");
let C:object;
C={
    name:"admin",
    id:"34TEMP",
    task:["Make To-Do List","Get Task","Divide Task Properly"],
    operations:{
        opId:"ADMIN-101",
        opName:"Special OP",
        opMember:[1,5,4,9]   
    }
}
// C.awards="T-Top"
console.log(C);

let D:any={};
D={
    message:"Hello Ji"
}

D.fistName="Denmark";
//   - We can't Add more Property in this Object
console.log(D);

// Array in TypeScript
// If we define array with any type, it can take any Value in Indexes
console.log("Array In TypeScript");

let E:any[]
E=["HFlakj",12,{msg:"Hello Ji"}]
E.unshift(1)

console.log(E);
// Tuples is just like Array,but we can define the which type of data come first
// We can use all methods of Array in Tuples as well
console.log("Tuples In TypeScript");

let F:[string,number,string,number,object]

F=["TypeScript",2,"In the",23,{_obID:"1232309i09",id:12}]

console.log(F);

// 'any' In TypeScript is

console.log("'any' disable TypeScript typechecking");

let G:any;
G=12;
console.log(G);
G="Heello"
console.log(G);


// Union in TypeScript 
// It work as 'OR' operator for type in TypeScript
console.log("Union in TypeScript");
let H:string|number;

H="GOKU"
console.log(H);

H=1
console.log(H);

// type Aliases - Is allow to create new name for existing type in TypeScript
console.log("Type Aliases in TypeScript");
type Hello=string;
let I:Hello="Hello Ji Again."

console.log(I)

// String Literal Types 
let J:"TypeScript"
// We have Assign same value which we define its type, we can do same with any other type

J="TypeScript"
console.log(J);
