// To run on VSCode : node _3_Objects_And_TimingEvents/_5_IteratingOverObjects.js
var student={
    "name" : "George", // specifying quotes in keys is optional
    rollno : 29, // keys are by default string
    marks : 94,
    4:9, // to access this dot notation will not work only square bracket notation will work
}

for (var prop in student){
    console.log(prop,student[prop]);
}

var iter=Object.getOwnPropertyNames(student);
console.log(iter);