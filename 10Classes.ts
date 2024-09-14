class UserDetails{
    email : string // every thing that do not have the private that is always public
    public name : string
    city : string = ""   // we need to provide the value if we are asking it from the constructor
    readonly readthis : string = "bhautik"; // now tthis we can get to read but we can not change
    private privatethis : string = "bhautik"; // now this we can not read out side the class 
    constructor(email : string , name : string){
        this.email = email
        this.name = name
    }
}


let bhautik =  new UserDetails("bhautikp105@gmail" , "bhautik");

bhautik.city= " windsor ";

