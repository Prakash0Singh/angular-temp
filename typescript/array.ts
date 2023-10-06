// ********************** 'Arrays' in TypeScript

const exampleArray: string[]=["this","is","Array","example","in","javascript"];

//const exampleArray: readonly string[] -- we can't make changes array,throw error

exampleArray.push("....")

console.log(exampleArray);

let exampleArray2:unknown[]=["Hello","world"]

console.log(exampleArray2);
exampleArray2=[12,343]
console.log(exampleArray2);


// ********************** 'Tuple' in TypeScript
// 'readonly' can also used in tuples
 let exampleTuple:[a:number,b:string,c:boolean,d:number,e:string];
 
 exampleTuple=[12,"String",true,54,"Tuple in TypeScript"]

 exampleTuple.push(false)

console.log(exampleTuple)
// for (let index = 0; index <7; index++) {
//     exampleTuple.pop();
    
// }

exampleTuple.unshift("Hello World")

console.log(exampleTuple)

// ********************* 'Union' in TypeScript
let unionArray:(number|string)[]=[1,2,4,6,7,9,10]
// console.log(unionArray);

