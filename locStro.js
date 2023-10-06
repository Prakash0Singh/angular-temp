//Using Local Storage -- 
localStorage.setItem("name","Local Storage")
localStorage.setItem("class","MCA 1 sem")
localStorage.setItem("age",20)
localStorage.setItem("car","Volvo")

function clickCounting() {

if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount)+1;
} else {
  localStorage.setItem("clickcount",1)
}
// alert("You Clicked "+localStorage.clickcount +" time")
document.getElementById("result").innerHTML = " Counter : " + localStorage.clickcount ;  

}

function clearCounting() {
window.localStorage.removeItem('clickcount');
}
let k2 = Object.keys(localStorage);
console.log(k2)
for(let key of k2) {
console.log(`${key}: ${localStorage.getItem(key)}`);
}

// Using Session Storage --

sessionStorage.setItem("demo","tesitng session")
sessionStorage.setItem("numbers",33)
sessionStorage.setItem("name","Session Storage")
sessionStorage.color='Yellow'
sessionStorage.pass='true'

console.log(localStorage)

let keys = Object.keys(sessionStorage);
for(let key of keys) {
console.log(`${key}: ${sessionStorage.getItem(key)}`);
}