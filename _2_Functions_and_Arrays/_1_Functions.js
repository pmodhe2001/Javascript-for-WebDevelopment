// To run on VSCode : node _2_Functions_and_Arrays/_1_Functions.js
function showAlert(msg){
    console.log(msg);
}
showAlert("This is my first Function in Javascript");

function sum(a,b){
    console.log(a+b);
}
sum(2,4);
sum(2.4,4);
sum(2.1324,3.12346789);
sum("a","b");
sum("My","Functions");
sum("My","Experiments","with","truth");

function divide(a,b){
    return a/b;
}
var res=divide(12,3);
console.log(res);