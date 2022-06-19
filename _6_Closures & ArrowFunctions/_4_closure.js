var i=10;
// closure : Inner function has access to the context of outer function
function outer(){
    var j=20;
    console.log(i,j);
    var inner=function inner(){
        var k=30;
        console.log(j,k);
    }
    return inner;
}

var inner=outer();
