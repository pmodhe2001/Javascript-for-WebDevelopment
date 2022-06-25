// To run on VSCode : // To run on VSCode : node _2_Functions_and_Arrays/_3_Functions_And_Scope.js
var x="Scope";
console.log(x);
function check(){
    i=5;
    console.log(i);
}
check();
console.log(x);
//console.log(i); // Running this will give error 
// check has global scope while i has local scope
console.log("------------------------------------------");

function c(){
    console.log("Inside C");
}
function b(){
   c();
   console.log("Inside B");
}
function a(){
  b();
  console.log("Inside A");
}
a();
console.log("Global Context");

