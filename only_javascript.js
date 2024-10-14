//👇Question1️⃣
//If we delcared a variable by using "var" and "let" keyword that variable's value can be 
//re-assign later but using "const" keyword can not reassign value later. 
var myName = "nikhil";
myName = "swati";
console.log(myName);    //💥Output: swati

let myId = 3256;
myId = 6032;
console.log(myId);      //💥Output: 6032

// const myProfile = "reactjs";
// myProfile = "angular";
// console.log(myProfile);        //💥Output: Error constant variable

const myBio = ["react", "js", "angular"]
const[a, b, c] = myBio;
console.log(a);
console.log(b);
console.log(c);
console.table([a,b,c])

function allData(mine,...allval){
    console.log(allval);
    console.log(mine);
    
    
}
allData("minu","sinu","jinu","lulo")

