// Generics In TypeScript
// Generics function

// We create function to return random element & we want to use it for both string and numbers
function getRandomNumberElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let colors = ["red","green","blue"];
let numbers = [1, 5, 7, 4, 2, 9];

console.log(getRandomNumberElement(numbers));
console.log(getRandomNumberElement(colors));

// Generics function with multiple types

function my<Y,Z>(p1:Y,p2:Z) {
    return {
        p1,p2
    }
}
let result=my({name:"Prakash Singh Basnal"},{jobTitle:"Angual Developer"})
console.log(result);
let results_Not=my(12,4)
console.log(results_Not);
// Generics Constraints
// So user can't pass other than objects
function mName<Y extends object,Z extends object>(p1:Y,p2:Z) {
    return {
        ...p1,
        ...p2
    }
}
let res=mName({name:"Prakash Singh Basnal"},{jobTitle:"Angual Developer"})
console.log(res);

// Parameters in Generics Constraints

function bulid<T,K extends keyof T>(obj:T,key:K) {
    return obj[key]   
}
let str = bulid({ name: 'Prakash' }, 'name');
console.log(str);

// Generics combine 2 objects
function merge<T extends object,U extends object>(obj1:T,obj2:U){
    return{
        obj1,obj2
    }
}
let object_Third=merge({name:"Hello World",time:"2 Hours"},{language:"TypeScript",helpfull:"Angular Js"}); 

console.log(object_Third);

// Generics in Interface
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list);

