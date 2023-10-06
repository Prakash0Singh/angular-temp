console.log("Functions in TypeScript");

function demo(para:string) {
    console.log(`Hello ${para.toUpperCase()}`);    
}
let myName="prakash singh Basnal"
demo(myName)

const nameList=["ram","shyam","mohan","shoan"]

nameList.forEach((n:string)=>{
    console.log(n.toLocaleUpperCase());
})
// define function with specific return type
function sum(a:number,b:number):number {
    return a+b;
}
let total=sum(9,3)

console.log(total);

function applyDiscount(price:number, discount?:number) {
    return price;
}

console.log(applyDiscount(10)); // 95
