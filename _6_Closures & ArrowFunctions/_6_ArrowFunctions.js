//var multiply = (x,y)=>{return x*y};
var multiply = (x,y)=>x*y;
var double = (x)=>2*x;
console.log(multiply(4,6));
console.log(double(16));

//BindingInArrowFunctions
function Person(name){ //Constructor function
    this.name=name;
    console.log(this);

    /*setTimeout(function(){
        console.log(this);
    },1000);*/

    setTimeout(()=>console.log(this),1000);
}
var p = new Person("Manisha");

