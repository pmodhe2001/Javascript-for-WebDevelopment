// To run on VSCode : node _3_Objects_And_TimingEvents/_2_SquareBracketNotation.js

var obj1={};
var obj2=new Object;
console.log(obj1,typeof(obj2));
var student={
    "name" : "George", // specifying quotes in keys is optional
    rollno : 29, // keys are by default string
    marks : 94,
    4:9, // to access this dot notation will not work only square bracket notation will work
}
console.log(student["name"],student["rollno"]);

function printProperty(obj,prop){
    console.log(obj[prop]);
}
prop="marks";
printProperty(student,prop);