// Generics in TypeScript


//Creating Array using Generics
const score:Array<number>=[];
const names:Array<string>=[];

//take 'any'type can take any type but can also return 'any' value 
function genFun1(value:any):any {
    return true
}

//don't know argument type but we wan to return it  with same type as argument
function generFun<Type>(value:Type):Type{
    return value;
}

//we can replace 'Type' with any word our 'type' created by us
interface you{
    youName:string,
    youId:number,
}
function generFun1<you>(value:you):you {
    return value;
}
console.log(genFun1("Hello"));

console.log(generFun(12));
console.log(generFun("STRING"));

let U=generFun1<you>({youName:"prakash",youId:292})
console.log(U);

// Generics in Array

// function searchProduct<T>(value:T[]):T[] { --If we wan to return array
//************************* If we wan to return array
function searchProduct<T>(value:T[]):T {

    // Some operation on Array
    const myIndex=3
    return value[myIndex]
}

// Using Arrow Function

const searchProducts=<T>(value:T[]):T=>{
    //Some operation on Array
    const myIndex=3
    return value[myIndex]
}

interface Database{
    login:string,
    status:boolean
}

function V<T,U extends Database>(value1:T,value2:U):object {
    return{
        value1,
        value2
    }
}

console.log(V(3,{login:"demologed",status:true}))

// Create Generics in Class Type

interface Quizz{
    name:string,
    points:number
}
interface Courses{
    name:string,
    author:string,
}
