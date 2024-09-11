interface User {
    readonly id : number,
    name : string,
    email : string,
    isActive : boolean,
    sayHello() : void,
    starttraile() : string ,
    getdiscount(coupanName : string , value : number) : number
}

let user1 : User = {
    id : 1 ,
    name : "bhautik" ,
    email : "bhautikp105@gmail" ,
    isActive : true ,
    sayHello() : void {
        console.log("hello");
    },
    starttraile() : string {
        return "hello"
    },
    getdiscount(coupanName : string , value : number) : number {
        return value
    }
}