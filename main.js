//javascript comment
//javascript console log

// document.addEventListener("DOMcontentloaded",()=> {
// console.log("Dom was ready")
// let x=5;
// let y=8;
// console.log(x+y)

// var mydata1;
// console.log(mydata1);
// })

/*multiline comment in here\
this is the multiline comment*/
console.log("here");

//variable declaration

//later initialization

//globle variable can be access from anywhere
var message;

//can be scoppped locally and functionwise let and let
//block scopping
{
var sc="abcdef"
let message2="xyz";//later initialization
const message3="hello I'm a const value";
//cannot  reassign values to a const variable
// message3="123";
// console.log("assign",message3)
}
//functional block
function myFunction(){

    let myVariable=500000;
    return 30000;
    // console.log("LOG2",myVariable)
}
//console.log("3000",myfunction())
// console.log("scope value pass",myfunction())
// myfunction();

message="hello world";
// console.log("LOG",message);

//message2="hello hello";
// console.log("LOG",message2);

//console.log("LOG",myVariable);

//cannot later initialization

//console.log(message3);

//automatic declaration
x=100;
console.log("LOCK",x);

//try to log the var variable
//console.log("abcde",sc)
//console.log("xyz",message2)

//conditionale block scope
if(true){
    let suji="I'm a blocked scope message";
    //var message="I'm a redeclared var variable";
    //console.log(message);
    console.log(suji);
}


//Global variable
//snakecase
var user_id="1234";
const APP_URL="http://127.0.0.1:5500";//use const values snakecase

//pascalcase
var UserEmaiol="123";

//camelcase variable declaration
var userEmail="user@epiclearn.com";//new standard method 