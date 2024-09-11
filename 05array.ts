let array : string[] = ["name" , "email" , "id"] ;

let superhero : Array<string> = ["name" , "email" , "id"] ;
let superhero1 : string[] = ["name" , "email" , "id"] ;
let superhero2 : [string , string , number] = ["name" , "email" , 1] ;

let power : number[][] = [[1,2,3],[4,5,6]] ;

power.push([7,8,9]);
power[0].push(10)
console.log(power);



// new in typescript 


type User1 = {
    readonly _id : number, 
    name : string,
    email : string,
    carddetails?:string,
}


let allusers : User1[] = [] ;

let user : User1 = {
    _id : 23423423, 
    name : "bhautik",
    email : "bhautikp105@gmail",
    // if we didnt put the card details it is notgiving any error that is the best part bescause of the "" ? ""
}       

allusers.push(user)
