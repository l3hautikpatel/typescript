function addTwo(num){
    return num + 2 ;
}

addTwo(5); // this is the show any while hover the ,so we need to check whetdher thi sis number or not in function 


function add(num : number){    // this is the best prectise to make the things right 
    return num + 2 ;
}



function getupper(text : string){     // if we didnt do string then the type anotation give the error 
    return text.toUpperCase();
}
//console.log(getupper(4));    // if we didnt do string then the type anotation give the error 
console.log(getupper("bhautik"));

// it is critical when we are working on the sign up like things or the validation things 

function user(name : string , isPaid : boolean , email : string , id : number){

}


let loginuser = (name : string, email :string,isPaid :boolean = false)=>{};           // this is the way we can apply the defult valur to the function



export {} ; // this line will ignore the erroe typically to convert js file;
