enum seatchoice{
    AILES,
    MIDDILE,
    WINDOWS,
    TAIL,
    HEAD
}


const seat = seatchoice.AILES; // this will give 1 
// after aileas middle windows tail head have the value 0 1 2 3 4

// if we assing some other in the ailes or the aother middle or the windows or the tail or the head then it will follow that order rest of the time it will be 0 1 2 3 4



// if assing the String then it is going to give error so we need to give the string value to all the elemtnts we can able to give the string value but need to give to the all elements



// this will converted into the iffee function in the javascript
//which tack too much lines of code in js so we can assing const to resuse that code like this 

const enum seatchoice12{
    AILES = "ailes",
    MIDDILE = "middle",
    WINDOWS = "windows",
    TAIL = "tail",
    HEAD = "head"
}

let seatbooked = seatchoice12.HEAD;