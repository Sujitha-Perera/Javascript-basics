1.Pending
 Fulfilled
 Rejected
 
2.Makes a function return a Promise instead of a normal value.

3.Allows writing asynchronous code in a synchronous style.

4.A function passed as an argument to another function. Executes after an async operation (e.g., API call, timer, file reading) completes.

5.Manages asynchronous operations by handling the execution of callbacks.

6.

function delayedGreeting(name) {
    console.log("Hello"); 
    setTimeout(() => {
        console.log(name); 
    }, 2000);
}
delayedGreeting("Alice");
