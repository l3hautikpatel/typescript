let score : number | string | boolean = 10;

score = "10";  
score = true;   


type User3 = {
    name : string ,
    id: number
}

type Admin = {
    username : string ,
    id : number 
}


let bhautik : User3 | Admin = {
    username : "bhautik" ,
    id : 1
}
bhautik.username = "bhautikpatel";


function getid(id : number | string) {
    // id.toUpperCase();  // this is not allowed because it is union
}

function getdbid(id : number | string) {
    if(typeof id === "string"){
        console.log(id.toUpperCase())
    }else{
        console.log(id)
    }
}

const data : number[] = [1,23,453,5,645,647];
const data2 : string[] = ["bhautik" , "patel" , "kumar"]
const data3 : (number | string)[] = [1,23,453,5,645,647,"bhautik" , "patel" , "kumar"]
const data4 : number[] | string[] = ["bhautik" , "patel" , "kumar"];
// const data4 : number[] | string[] = [1,23,453,5,645,647,"bhautik" , "patel" , "kumar"]; // not allowed
