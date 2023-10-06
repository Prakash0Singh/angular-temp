// Interface in TypeScript
interface Earth{
    fullname:string;
    country:string;
    state:string,
    city:string;
    pincode:number;
}
// We add new Property in Interface by declaring it again with required property
interface Earth{
    favColor:string;
}
let earth:Earth={
    fullname:"Prakash Singh",
    country:"India",
    state:"Rajasthan",
    city:"Jaipur",
    pincode:302021,
    favColor:"Red"
}
console.log(earth);
 
// Class use 'implements' to add Interface property
// Interface use 'extends' for Inheritance 

interface IAnimal {
    name: string;
    eat: () => void;
}

class Dog implements IAnimal {

    public constructor(
        public name: string
    ) { }

    public eat () {
        console.log('The dog is eating.');
    }

}

const dog = new Dog('Fluffy');

// "The dog is eating."
dog.eat();
