import {add} from "./math.js";
// //primitive types

// //Number
// let userId= 204519;
// console.log("User id",userId);
// console.log("Type of user id :", typeof userId);

// //String
// let email= "sujithascc1@gmailcom";
// console.log("User email",email);
// console.log("Type of user email :", typeof email);

// //boolean
// let isAuthenticated=false;
// console.log("User auth",isAuthenticated);
// console.log("Type of user email :", typeof isAuthenticated);

// //null
// let phoneNumber=null;
// console.log("User auth",phoneNumber);
// console.log("Type of user email :", typeof phoneNumber);

// //undefined
// let dob;
// console.log("User dob",dob);
// console.log("Type of user dob :", typeof dob);

// //
// let uniqueId=Symbol("id");
// console.log("User uid",uniqueId);
// console.log("Type of user uid :", typeof uniqueId);

//object types

//object
//let person={name:"sujitha",age:24}

// console.log("value of person: ",person);
// console.log("type of person:",typeof person);

// console.log("value of person: ",person.name);
// console.log("type of person:",typeof person.name);

//array
// let myArray=[1,2,3,4,5];
// console.log("value of myarray: ",myArray);
// console.log("value of myarray: ",myArray.length);
// console.log("type of myarray:",typeof myArray);

//function befor ES^
 function greet(name){
    //return "hello " + name;
    //Template literals 
    return `hello, ${name}`;// javascript ES6 version feature 
 }
 //calling to a js function with a parameter
//  console.log("value of function: ",greet("sujitha"));
//  console.log("type of function:",typeof greet());

//After ES6
//arrow function
// const greetTwo=(name)=>{
//      return `hello, ${name}`;
// }
// console.log("value of function: ",greetTwo("sujitha"));
// console.log("type of function:",typeof greetTwo());

//destructuring
// let person={name:"sujitha",age:24}
// const{name,age}=person;
// console.log("name : ",name);
// console.log("age:",age);

//nested user object
let user={
    name:"suji",
    age:24,
    data:{
        uId:"123456678",
        token:"233444567jhjjjfjjfg",
        images:["1234","12324556","1345678"]
    }
}
console.log(user.data.uId);//tradition method

const{uId}=user.data;//destructure method
console.log(uId)
console.log("updatedAt:",user.data.updatedAt);
//optional chaining
//nulish coalescing
console.log("updatedAt 123:",user?.data?.updatedAt ?? "N/A");//if value did not excist n/a shown in output


//Spread & Rest Operator(ES6)
const myArray1=[1,2,3,4,5];
const myArray2=[...myArray1,6,7];//ES6 new feature

myArray1.push(6);//traditional method
myArray1.push(7);
myArray1.pop();
myArray1.pop();console.log(myArray1);

console.log(myArray1,myArray2);

//import and export
//console.log(math(100,50));

// console.log("I am here before Dom load");

//     const startTime=performance.now();
//     //event listner
//     document.addEventListener("DOMContentLoaded",(event)=>{
//     const endTime=performance.now();
//     const loadTime=(endTime-startTime).toFixed(2);//calculate the time in milisecond

//     console.log("DOM fully loaded and pased");
//     console.log(`Dom load time: ${loadTime}ms`);

//     const maintitle=document.querySelector(".main-title");
//     console.log(maintitle);
// //change the main title
// maintitle.textContent="I am the change title"//change DOM

// });

// console.log("I'm here after DOM load!");

//session storage

// console.log("total is:",add(100,40));

// if(sessionStorage.getItem("name")==null){
//     console.log("name is not set");
//     sessionStorage.setItem("name","sujithaaa");
// }else{
//     console.log("name is:",sessionStorage.getItem("name"))
// }

//promises

// let myPromise= new Promise((resolve,reject) => {
//     let success=true;
//     if(success){
//         //simulate a delay of 3 seconds
//         setTimeout(()=>resolve("operation is successful"),3000)
//         // resolve("operation is successful");
//     }else{
//         reject("operation is failed")

//     }
// });
// myPromise.then((message)=>{
//     console.log(message);//operation is successful

// }).catch((error)=>{
//     console.log(error);//operation is failed
// }).finally(()=>{
//     console.log("promise is completed");
// });

//async wait

// async function fetchTodos(){
//     try{
//         let respone = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data =await respone.json();
//         if(data){
//             console.log("respone data",data.username);

//         }
//     }catch(error){
//         console.log("error fetching data",error);
//     }
// }
// //call the async function
// fetchTodos();

// async function initializeApp(){
//     try{
//         const message=await myPromise;
//         console.log("message:",message)
//         const userResponse= await fetch(
//             "https://jsonplaceholder.typicode.com/users/1"
//         );
//         const user = await userResponse.json();
//         //check if the user object is not null
//         if(user?.id){
//             console.log("response data:",user.id);
//             const postRespone = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//             const posts = await postRespone.json();
//             console.log("posts:",posts);
//         }

//     }catch(error){
//         console.log("Error fetching data:",error);
//     }
// }
// initializeApp();
// console.log("I am after the async function");

//define a function that accept a callback
function fetchData(callback){
    console.log("Fetching started:");
    setTimeout(() => {
        let data={name:"sujibro",age:24}
        callback(data);
        console.log("Timeout completed:")
    }, 3000);//simulate network request with a delay of 3 seconds
    console.log("fetching completed")
}
//define a callback funcion
function handleData(data){
    console.log("data received:",data)
}
//call the function with the callback
//  pass a argument to the fetchData function
fetchData(handleData);