// To run on VSCode : node _2_Functions_and_Arrays/_8_FunctionsOnArrays.js

var arr=["abc,",2,"def",4,5]; // Arrays in Javascript are heterogenous
console.log(arr);
console.log(arr.length);
arr.push(100);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);
arr.shift(1);
console.log(arr);
arr.unshift(9);
console.log(arr);
console.log(arr.indexOf(4));
arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);
console.log(arr.join('*'));
console.log(arr.toString());