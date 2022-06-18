// To run on VSCode : node _2_Functions_and_Arrays/_4_FunctionWithinFunction.js

var global="global";
function outer(){
    var outervar="outer";
    function inner(){
        var innervar="inner";
        console.log(innervar);
        console.log(outervar);
    }
    inner();
    console.log(global);
}
outer();
