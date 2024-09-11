type User = {
    name : string , 
    email : string ,
    isActive : boolean ,
    id : number
}

let user1 : User = {
    name : "bhautik" ,
    email : "bhautikp105@gmail" ,
    isActive : true ,
    id : 1
}

type Mystring = string;

let myname : Mystring = "bhautik";  // this si valid in ts 

function returnObjectWihttypeUser() : User {
    return {name : "bhautik" , email : "bhautikp105@gmail" , isActive : true , id : 1}
}

type cordination  = {
    x : number ,
    y : number
}

let cordinate : cordination = {x : 10 , y : 20} ;  // this is the real life usage of the type 


// learnign of the readonly , ?  , &


type User2 = {
    readonly _id : number, 
    name : string,
    email : string,
    carddetails?:string,
}

let myuser = {
    _id : 23423423,
    name : "bhautik",
    email : "bhautikp105@gmail",
    // if we didnt put the card details it is notgiving any error that is the best part bescause of the "" ? ""
}


myuser.name = "bhautikpatel";
// myuser.id = 23124;   // this is not allowed because this is read only file ; 


type cardnumber =  {
    cardnumber : number;
}

type cardholder = {
    name : string ,
}


type card = cardnumber & cardholder & { cvv : number }



// just for fun 


type myobj = {
    readonly _arraywe : number[] ,
    name : string 
}

let myobjenew = {
    _arraywe : [1,2,3,4,5] ,
    name : "bhautik"
}

myobjenew._arraywe.push(10);