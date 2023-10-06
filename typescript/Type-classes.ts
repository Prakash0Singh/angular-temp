// Classes in TypeScript
// 'readonly' Property make variable immutabel
class Person{
    constructor(private fname:string, private lname:string){}

// Getter function is used here
    get fullName():string {
        return `Full Name is = ${this.fname} ${this.lname}`
    }
// Setter function is used here
    set editFname(para:string){
        this.fname=para
    }
    set editLname(para:string){
        this.lname=para
    }
}
let user1=new Person("Prakash","Singh")

console.log(user1.fullName);

user1.editFname="PRAKASH"
user1.editLname="SINGH BASNAL"
console.log(user1.fullName);

// Inheritance in Classes

class Employee extends Person{
    constructor(
        firstName:string,
        lastName:string,
        private jobTitle:string,
        ){
            super(firstName,lastName)
        }
        aboutJob(){
            this.fullName
            return this.jobTitle 
        }
}
let emp=new Employee("Prakash","Singh","Angular Developer")

console.log(emp.aboutJob());

// Abstract Class
abstract class Income{
    constructor(private name:string,private jobTitle:string){}

    abstract getSalary():number
}

class EmpSal extends  Income{

    constructor(private empName:string,private title:string,private salaray:number){
        super(empName,title)
    }

    getSalary(): number {
        return this.salaray
    }
}

let EmployeeAdded= new EmpSal("Ram Lal","Angular Developer",12000)

console.log( EmployeeAdded.getSalary());