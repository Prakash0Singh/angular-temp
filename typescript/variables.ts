
let num :number = 12
console.log(num)

let about="TypeScript Hello world"
console.log(about);

// about=true throw arrow because re-assingning with different dataype

let var1:any;
var1=true;

console.log(typeof(var1));

var1="TypeScript is Add-On on JS"
console.log(var1);

var1=2;
console.log(var1);

 
// ********************** 'any' && 'unkown'

let exampleAny:any;
let exampleUnkown:unknown;

exampleAny="hello world";
console.log(exampleAny.trim()); ;



// exampleAny=23;
exampleAny.trim();

exampleUnkown="hello world    ";
if(typeof exampleUnkown=="string"){
    exampleUnkown.trim();
}

let newVariable:boolean =exampleAny; 
let newVariable2: string =exampleUnkown as string;

console.log(newVariable);
newVariable=false;
console.log(newVariable);

console.log(newVariable2);


// ********************** 'never' && 'undefined' && 'null'

let exampleNever:never;
// let exampleNever=1;

let exampleUndefine:undefined=undefined;
let exampleNull:null=null;

// Union in TypeScript

let newUnion :number|string|boolean;

newUnion="TypeScript Union";
console.log(newUnion);

newUnion=true;
console.log(newUnion);

newUnion=12;
console.log(newUnion);
