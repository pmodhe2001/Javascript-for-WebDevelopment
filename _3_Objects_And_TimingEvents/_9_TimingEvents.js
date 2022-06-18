// To run on VSCode : node _3_Objects_And_TimingEvents/_9_TimingEvents.js

/*
function sayHello(){
    console.log("sayHello");
}
setTimeout(sayHello,4000);
*/

var counter=1;
function sayHello(){
    console.log("Saying Hello after ",counter ,"seconds");
    counter++;
    if(counter>5){
        clearInterval(instanceID);
    }
}
var instanceID=setInterval(sayHello,1000);