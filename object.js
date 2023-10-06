console.log("Object Methods in JavaScript");
//Object.defineProperty() 
//Object.create()
//delete
//Object.keys()
//Object.values()
//Object.entreis()
//Object.assign()
//Object.seal()
//Object.freeze()
//in
//Object.fromEntries()
//Object.getOwnPropertyDescriptors()
//Object.preventExtensions()


//Creating Object using Constructor function ----------
function Person(name, age, userid) {
  this.name = name;
  this.age = age;
  this.userid = userid;
}

const myUser = new Person("admin", 22, "L23CQ1");
Person.prototype.server = "localhost"; //adding new property in Object prototype
const ranUser = new Person("random", 30, "R9N24C");
console.log(myUser);
console.log(ranUser);

//Creating Object by simple declaring ----------
const ob1 = {
  name: "A",
  userCode: "39mXr1",
  city: "jaipur",
  login: "true",
  info: function () {
    return `${this.name} lives in ${this.city}`;
  },
  xyz: function () {
    alert("Just Checking");
  },
};
//'delete' operator for delete object property
delete ob1.xyz;

console.log(ob1);
console.log(Object.getOwnPropertyDescriptors(ob1));

//Creating Object by create() method
const sam = {
  name: "B",
  position: "Employee",
  type: "sales",
  isHire: true,
  otherInfo: function () {
    const bond = true;
    return `Name: ${this.name} Hire:${this.isHire}`;
  },
};
//create() and this
const ob2 = Object.create(sam);
console.log(Object.getPrototypeOf(ob2));
// console.log(ob2.__proto__)
//Object.defineProperty() - add property 
Object.defineProperty(ob2, "userid", {
  value: "5nk3js4",
  writable: true,
  enumerable: true,
  configurable: false,
});
delete ob2.userid;
ob2.password = "******";
ob2.age = 22;
ob2.joing = new Date(2023, 00, 09, 09, 05, 00);
console.log(ob2);

//keys()/getOwnPropertyNames()-return all keys of Object as Array
// console.log(Object.getOwnPropertyNames(sam))
console.log(Object.keys(sam));

//values()-return all values of object as Array
console.log(Object.values(sam));

//entreis() -make array of arrays with key value pair
console.log(Object.entries(sam));

const ob3 = {
  usermail: "james@gmail.com",
  userid: "2c4bs5",
  task: function () {
    const today = "Make Copy Of Documents";
    const status = false;
    return `Empoyee Name : ${this.name} ,Today Status:${status}`;
  },
};
const ob4 = {
  name: "James",
  position: "Sales Employee",
  express: 0,
};
//assign()- merge 2 objects or add object on new object
const mergeob = Object.assign({ city: "Jaipur", country: "India" }, ob3, ob4);
// const mergeob=Object.assign(ob4,ob3)
console.log(mergeob);
//console.log(mergeob.task())

const user = {
  username: "AzureDiamond",
  password: "hunter2",
};
console.log(user);
//seal()-can't add new,delete property but can modify 
const newUser2 = Object.seal(user);
newUser2.password = "*******";
newUser2.active = true;
delete newUser2.username;
console.log(newUser2);

//freeze()-can't add,delete and modify property
const newUser = Object.freeze(user);
newUser.active = true;
delete newUser.username;
console.log(newUser);

//isFrozen() - check object is frozen or not
console.log(Object.isFrozen(user));

//in - used for checking property already exists in object or not
console.log("username" in newUser2);

// Object.fromEntries()-convert Array of Arrays into Object
const dataEntry = [
  ["car", "volvo"],
  ["laptop", "hp"],
];
const dataObj = Object.fromEntries(dataEntry);
console.log(dataObj);

//Object.getOwnPropertyDescriptor() - returns an object describing the configuration of a specific property on a given object
const objectdemo = {
  pro: "sample",
  testing: 10,
};
console.log(Object.getOwnPropertyDescriptor(objectdemo, "pro"));

//Object.getOwnPropertyDescriptors() -returns an object describing the configuration of all property in object

console.log(Object.getOwnPropertyDescriptors(objectdemo));

//Object.getOwnPropertySymbols() -Array of Symbols
//Object.hasOwn() AND hasOwnProperty() - object property/object prototype  defined or inherited 
//Object.preventExtensions() - prevents properties from  adding but can remove 

const objectt = {
  sample: true,
  testing:"Simple testing of object."
};
Object.preventExtensions(objectt);
//delete objectt.sample;
//Object.defineProperty(objectt, 'property1', {value: 42})
objectt.sample=false;
console.log(objectt);