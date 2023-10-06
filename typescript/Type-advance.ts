// ############################### Typecasting in Typescript

// let valu=document.getElementById("some-input") as HTMLInputElement
// valu.value="Hello World"
let temp;
temp="Hello World";
console.log((temp as string).toUpperCase())

//initializing the length variable which is of number type
let str: number = 22 ;

//initializing the flower variable which is of string type
let numbb: string = (str as unknown) as string ;
console.log('The length of the string is: ', str) ;

// ############################## Type Guards in Typescript
// Type Guards have 3 predefine methods 'typeof','instanceof','in'

//'typeof' is used to return datatype of varaible
let chechking1=192
let chechking :string="Hello World in Typescript"
console.log(typeof chechking);
console.log(typeof chechking1);

// 'instanceof' it return boolean if the propety present in object,interface,class
// it will also check its parent class ,interface

let HelloJi:number[]=[12,4,645,6,5]
console.log(HelloJi instanceof Array)

// 'in' it return boolean value if 'property' is present in object
let Bikee:object={brand:"Honda", model:"12CZ",year:"2017"}

console.log('model' in Bikee);

// ############################### Type Assertions in Typescript

function Sms(para:number):number|string {
    return para=para*para
}
let totalSms=Sms(45) as string

console.log(totalSms)

// ############################### Intersection types in Typescript
// It is used to combining multiple existing types

type A={
    name:string
}
interface KO {
    fullName:string
}

const Com:A & KO={
    name:"Logical",
    fullName:"Logical Mind" 
}
console.log(Com)

