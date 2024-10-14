//event loop:
//actuall js is single thread language and it handles synchronous operation only but it can't hadle
//asynchronous operation so in js asynchronous operation is handled by event loop.
//event lop is used to manage tha execution of asynchronous operation.
//event loop continuously keep on checking the call stack and callback queue in call back queue 
//there is asynchrooonous tasks are queued for exectuion and call stack all function are queued there for execution.
//asynchronus function i.e. setTimeOUt, setInterval, fetch, promise etc.
//event loop continuously cheeck the call stack and callback queue to decide the task to be execute next.

//execution context:
//when function is creted at that time exectuion context also created.
//we creeated a program or code or script so that promogram or code how js will run it or execute it i.e. called as execution context.
//when js run the progream it creates 2 phase 1.memory creation phase 2.execution phase
//in memory creation phase it allocates memory to variable and function declaration.
//so in execution phase it assign value to variagble and funciton.

//when code is going to execute at that time 1.global execution context 2.functional execution context 3.eval execution context
//1.global exebgii6ton context.
//2. the gec is store in "this" variabgle but thsi variable refere different value in browser is differ and node env. is differe.
//3.memory creation phase       4.execution phase
//  var myname: undefine          var myname: "nikhil"
//  function: undefined


//hoisting: is a mechanism in js where variable and function declaration are moved to top of theie scope before the code execute.
//var keyword hoist it with default initialization. so it doex not return reference error rather return undefined.

// hoist using let and const kyword without default initializtion it returns reference error.

//hoisitng means before initialization if accessing variable i.e called hoisitong.

console.log(x);
var x = 20;
console.log(x);

//function hoisting
//function declaration hoisted with function definition, so allow you to call the function before initializtion.

myCar();
function myCar(){
    console.log("mahindra scorpio");
}

//******************************************************************************************************************************** */
//Promise:
