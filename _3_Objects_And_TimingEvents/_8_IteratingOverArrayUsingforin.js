// To run on VSCode : node _3_Objects_And_TimingEvents/_8_IteratingOverArrayUsingforin.js

var arr=[12,34,56,78,98];
var obj={
    0:0,
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
}
for(var i in arr){
    console.log(arr[i]);
}
var i=2;
for(i in obj){
    console.log(obj[i]);
}