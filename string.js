console.log("Strings in JavaScript")

// --------------------String Methods in JavaScript

//length()
let g="abcdefghijklmnopqrstuvwxyz";
console.log(g.length);

//slice(),substring(),substr()
let h="Who_like_fruits_?"
console.log(h.slice(-9))
console.log(h.substring(-2,9));
console.log(h.substr(3,9));

//replace(),replaceAll()
let i ="A sentence is the largest independent unit of grammar."
console.log(i.replace("largest","biggest"))


let k ="I love dogs,dogs are very easy to love,Dogs are very popular."
let l =k.replaceAll("dogs","cats")
console.log(l)

//toUpperCase(),tolowerCase()
let m="small case string conveted into using uppercase()";
console.log(m.toUpperCase());

let n="UPPER CASE STRING CONVERTED Into Using LOWERCASE()";
console.log(n.toLowerCase());

//concat()
let o='simple';
let p='text';
console.log(o.concat(' ',p))

//trim(),trimStart(),trimEnd()
let q='                 Trim      string               ';
console.log(q)
console.log(q.trim())
console.log(q.trimEnd())
console.log(q.trimStart())

//padStart(),padEnd()
let r ="testing";
console.log(r.padStart(10,"*"))
console.log(r.padEnd(15,"#"));

//charAt(),charCodeAt(), Property access [ ]
let s= "Hello World in JavaScript";
console.log(s.charAt(0));
console.log(s.charCodeAt(0))
console.log(s[0])

//split() used to convert string into Array 
let t="Some,thing,is,not,working";
let u="a e i o u are important";
let v="Q|W|E|R|T|Y|keyboard are famous";
let testingv="A:S:D:F:G:H:J:K:L";

console.log(t.split(","));
console.log(u.split(" "));
console.log(v.split("|"));
console.log(testingv.split(":"))

//----------------String Search Methods in JavaScript

//indexOf(),lastIndexOf(), search()
let strA="Please Location locate where 'locate' occurs!";
console.log(strA.indexOf('locate',17));

console.log(strA.lastIndexOf('locate'))

console.log(strA.search("Location"))

//match(),matchAll().
let text = "The rain in SPAIN stays rain  mainly in the rain plain rain";
const textArr=text.match("ain");
console.log(textArr)
console.log(textArr.length)

const textB=text.matchAll("rain")
console.log(textB);
console.log(Array.from(textB).length)


//includes() -- return true OR false if string containg specific value
let textC="Hello world, welcome to the universe";
console.log(textC.includes("worlds"))

//startWith(),endWith() -- return true OR false if string start/end with specific value
console.log(textC.startsWith("Hello"))
console.log(textC.endsWith("universe"))

//-----------------Template Literals in JavaScript

let textE=`Sample of usig "Template Literal's " in Script`;
console.log(textE)
let numb=34
console.log(`We can use Variable in Template Literals like this numb = ${numb} by using $` +"{variable,function}")

let testcase1="Hello World in Javascript";
let testcase2=testcase1.split("");
let revtest2=testcase2.reverse();
let revtest1=revtest2.join("");

console.log(testcase1)
console.log(revtest1)