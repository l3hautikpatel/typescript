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


// what is the differance btw interface and type ?


// interface offer reopning funcationality like if we want to add new feature in the future
// in userr i want to add gihub profile and twitter profile

interface User{
    github? : string
    twitter? : string // because i add user 1 so this need to put in optional other then that i can make it mandetory 
}

// another one is inheratance

interface Admin extends User {    //  interface Admin extends User , anotherInterface {
    
    role : "admin" | "dev" | "user";
}

let Admin1 : Admin = {
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
    },
    role : "admin"
}