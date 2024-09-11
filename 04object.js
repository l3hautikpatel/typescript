var user1 = {
    name: "bhautik",
    email: "bhautikp105@gmail",
    isActive: true,
    id: 1
};
var myname = "bhautik"; // this si valid in ts 
function returnObjectWihttypeUser() {
    return { name: "bhautik", email: "bhautikp105@gmail", isActive: true, id: 1 };
}
var cordinate = { x: 10, y: 20 }; // this is the real life usage of the type 
var myuser = {
    _id: 23423423,
    name: "bhautik",
    email: "bhautikp105@gmail",
    // if we didnt put the card details it is notgiving any error that is the best part bescause of the "" ? ""
};
myuser.name = "bhautikpatel";
var myobjenew = {
    _arraywe: [1, 2, 3, 4, 5],
    name: "bhautik"
};
myobjenew._arraywe.push(10);
