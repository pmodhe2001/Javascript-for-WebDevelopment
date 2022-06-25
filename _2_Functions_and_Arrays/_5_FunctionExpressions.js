// To run on VSCode : // To run on VSCode : node _2_Functions_and_Arrays/_5_FunctionExpressions.js

var factorial = function fact(n){ // We can not access by function fact
    var res=1;
    for(i=1;i<=n;i++){
        res=res*i;
    }
    return res;
}
console.log(factorial(5));
console.log(factorial);
var factorial2 = function (n){
    var res=1;
    for(i=1;i<=n;i++){
        res=res*i;
    }
    return res;
}
console.log(factorial2);

var factRecursive=function fact(n){
    if(n==0){
        return 1;
    }
    return fact(n-1)*n;
}
console.log(factRecursive(4));