// To run on VSCode : node _3_Objects_And_TimingEvents/_1_Objects.js

var student={
    "name" : "George", // specifying quotes in keys is optional
    rollno : 29,
    marks : 94,
}
console.log(typeof(student));
console.log(student);
student.name = "Billy";
student.marks=97;
console.log(student.name,student.rollno,student.marks);
console.log(student.sem);
student.sem=5;
console.log(student);