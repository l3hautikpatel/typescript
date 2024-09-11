// tuple is the thig that restrict the user to enter only certain data type in array 


let user : [number , string] = [1 , "bhautik"];
// we can change it in the traditional way

user[0] = 10;
user[1] = "patel";

// but the thing is the user can only enter number and string in the array
// user[0] = "bhautik";
// user[1] = 1;

// another thing is that we can use the thing like push pop etc in the array
user.push(10);
user.pop(); 
// this operation in the tuple is possible but it should not allowed in tuple 



