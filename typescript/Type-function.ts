// Function Type in TypeScript

// In TS, we can define function 'parameter' type and even 'return' type of function
function helloJI(val1:number,val2:number):string {
    let sum=val1+val2
    return `Sum of Both ${val1} + ${val2} = ${sum}`
}
console.log(helloJI(1,5));

// Optional Parameter in Functions

function Multi(p1:number,p2:number,p3?:number):string {
    if (p3!==undefined) {
        return `${p1}*${p2}*${p3} = ${p1*p2*p3}`
    }
    return `${p1}*${p2} = ${p1*p2}`   
}
console.log(Multi(2,4,3));

// Default Parameter in Function

function discountMaster(amount:number,discount=10):number{
    return amount-discount
}
// Or we can use Optional operator (?)
console.log(discountMaster(1000))

// Rest Parameter in TypeScript
console.log("Rest in TypeScipt");

function Addition(...para:number[]):number {
    let total=0
    para.forEach((num)=>{total+=num})
    return total
}
console.log(Addition(12,1));
console.log(Addition(2,20));
console.log(Addition(9,4,4,1));
console.log(Addition(12));

// Function Overloading in TypeScript

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}
console.log(add(2,3));
console.log(add("Hello "," World"));

// Overloading with Optional Aguments
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

console.log(sum(12,2));
//Example of Never in Function

// it not return but we can get through 'throw'but it will also stop programme execution after 'throw'
function raiseError(m: number): never {
    let cube =m*m*m
    // throw cube
    throw new Error("Can't Return anything in Never")
}


// console.log(raiseError(3));

// console.log("Message After 'never'...");

// Example of void in functions

function voed(m:number) :void{
    let cube =m*m*m
    // return void
}

console.log("In Void function return - " + voed(12));

console.log("Message After 'void'...");