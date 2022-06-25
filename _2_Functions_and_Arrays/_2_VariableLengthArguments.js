// To run on VSCode : // To run on VSCode : node _2_Functions_and_Arrays/_2_VariableLengthArguments.js
function sum(a,b){
    console.log(a,b);
    console.log(a+b);
}
// Adding 4 to undefined gives NAN
sum(4); // b is not passed it is taken as undefined

// Let's pass more variables then required
sum(4,3,4);// Extra arguments are simply ignored