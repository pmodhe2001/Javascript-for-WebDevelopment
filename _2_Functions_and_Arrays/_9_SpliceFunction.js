// To run on VSCode : node _2_Functions_and_Arrays/_9_SpliceFunction.js

var arr=[0,1,2,3,4,5,6,7,8,9];
arr.splice(1,1);
console.log(arr);
arr.splice(1)//Delete all elements from index 1;
console.log(arr);
arr.splice(1,0,1,2,3,4,5,6,7,8,9);// Adds elements after index 1 deletes 0 elements
console.log(arr);