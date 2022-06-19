function demo(){
    console.log(this);
}
var demo2=function(){
    console.log(this);
}

var obj={
    'prop1':12,
    'print':function(){
        console.log(this);
    }
}


console.log(this);
demo();
demo2();
obj.print();

//This here is calling to window object

