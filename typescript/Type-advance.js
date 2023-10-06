// ############################### Typecasting in Typescript
// let valu=document.getElementById("some-input") as HTMLInputElement
// valu.value="Hello World"
// ############################## Type Guards in Typescript
// Type Guards have 3 predefine methods 'typeof','instanceof','in'
//'typeof' is used to return datatype of varaible
var chechking1 = 192;
var chechking = "Hello World in Typescript";
console.log(typeof chechking);
console.log(typeof chechking1);
// 'instanceof' it return boolean if the propety present in object,interface,class
// it will also check its parent class ,interface
var HelloJi = [12, 4, 645, 6, 5];
console.log(HelloJi instanceof Array);
// 'in' it return boolean value if 'property' is present in object
var Bikee = { brand: "Honda", model: "12CZ", year: "2017" };
console.log('model' in Bikee);
// ############################### Type Assertions in Typescript
function Sms(para) {
    return para * para;
}
var totalSms = Sms(45);
console.log(totalSms);
var Com = {
    name: "Logical",
    fullName: "Logical Mind"
};
console.log(Com);
//Example of Never in Function
// function honey():never{
//     throw new Error("This function Error on retturing")
// }
// console.log(honey())
