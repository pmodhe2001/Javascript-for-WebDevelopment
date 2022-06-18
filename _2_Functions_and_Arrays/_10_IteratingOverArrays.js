// To run on VSCode : node _2_Functions_and_Arrays/_10_IteratingOverArrays.js
var arr=[0,1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

function print(element){
    console.log(element);
}
arr.forEach(print);