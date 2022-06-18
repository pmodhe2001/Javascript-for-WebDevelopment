// To run on VSCode : node _2_Functions_and_Arrays/_6_Passing_Function_As_Arguments.js

var factorial= function (n){
    if(n==0){
        return 1;
    }
    return factorial(n-1)*n;
}

function ncr(n,r,factorial){
    return factorial(n)/(factorial(r) * factorial(n-r));
}
var res=ncr(5,2,factorial);
console.log(res);