// To run on VSCode : node _2_Functions_and_Arrays/_7_Arrays.js

//var arr=[2,4,6,7,9];
var arr = new Array(1,2,3,4,5);
console.log(arr);
console.log(arr[2]);
arr[2]=300;
arr[7]=1200;
console.log(arr);
console.log(arr.length);
console.log(arr[6],arr[10]);

var emptyArray=new Array;
console.log(emptyArray);

//Intresting way to create array
var a = new Array(2); // 2 is size of array
console.log(a);