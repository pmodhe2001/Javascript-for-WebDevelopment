// To run on VSCode : node _3_Objects_And_TimingEvents/_4_HowAreObjectsStored.js

var obj1={
    p1:10,
}
var obj2=obj1;
console.log(obj1==obj2);
console.log(obj1);
console.log(obj2);
obj1["p1"]=100;
obj2["p1"]=100;
console.log(obj1==obj2);
console.log(obj1===obj2);
obj2={
    "p1":100,
}
console.log(obj1==obj2);
console.log(obj1===obj2);