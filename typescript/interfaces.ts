// Interfaces in TypeScript
// Interfaces are similar to 'type', except they only apply to object types.
// We can add new property in  in existing one by createing new interface with same name 
interface testing{
    name:string,
    id:number,
    isAvail:boolean,
    task():string,
    getdis(coupon:string,value:number):number
}
interface testing{
    feedback:string
}

let Prakash:testing={
    name:"Prakash",
    id:2,
    isAvail:true,
    task:()=> {
        return "Task Completed"
    },
    getdis:(name:"WEL", off:10)=>{
        return 123
    },
    feedback:"Thank you"
}
console.log(Prakash)

// We can also use Inheritance in Interfaces by 'extends' keyword

interface User{
    name:string,
}
interface Admin extends User{
    role:"admin" | "user" |"tester"
}
const userTesting:Admin={
    name:"Prakash Singh",
    role:"tester"
}
console.log(userTesting);