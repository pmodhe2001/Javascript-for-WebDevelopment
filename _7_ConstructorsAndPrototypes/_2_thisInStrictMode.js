'use strict' // In strict mode this will not give window obj
function demo(a,b){
    console.log(this);
    console.log(a,b)
}

var obj={
    'prop1':12,
    'print':function(){
        console.log(this);
    }
}

//demo();
//obj.print();
//demo.call(obj); // demo is bound to obj;
//demo.call(Window);// demo is bound to window
//demo.apply(obj);
demo.call(obj,3,4);
demo.apply(obj,[3,4]);