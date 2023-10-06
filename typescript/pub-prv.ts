// Class in Typescript
// Public Private Member in Typescript
// Getter and Setter in TypeScript
// class User2 {
//     user:string
//     email:string
//    private readonly city="Jaipur"
//     constructor(user:string,email:string) {
//         this.user=user; 
//         this.email=email;
//     }
// }
//We can Also do that in short Way
class User2 {
   private readonly city="Jaipur"
   private _courseCount=1
    constructor(
        public user:string,
        public email:string,
        public userId:string) {
    }
    private deleteToken(){
        console.log("Token Deleted")
    }
    get getAppleEmail():string{
        return `apple.${this.email}`;
    }
    get courseCount():number{
       return this._courseCount
    }
    set courseCount(couNumber){
        if (couNumber<=0) {
            throw new Error ("Course Count Should be greater than 0")
        }
        else{
            this._courseCount=couNumber
        }
    }
}
const userPrakash= new User2("Prakash Singh","prakash@gmail.com","temp1232")
userPrakash.courseCount=10;
console.log(userPrakash);
console.log(userPrakash.getAppleEmail);
console.log(userPrakash.courseCount);
