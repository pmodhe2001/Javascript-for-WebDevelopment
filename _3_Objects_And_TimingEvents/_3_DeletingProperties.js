// To run on VSCode : node _3_Objects_And_TimingEvents/_3_DeletingProperties.js
var student={
    "name" : "George", // specifying quotes in keys is optional
    rollno : 29, // keys are by default string
    marks : 94,
    4:9, // to access this dot notation will not work only square bracket notation will work
}

console.log(student);
delete student[4];
console.log(student);
delete student.rollno;
console.log(student);