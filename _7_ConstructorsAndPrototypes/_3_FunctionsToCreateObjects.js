var student1={
    name:"abc",
    rollno:10,
    marks:80,
}
var student2={
    name:"xyz",
    rollno:13,
    marks:96,
}
console.log(student1);
console.log(student2);

function createStudent(name,rollNo,marks){
    var student={};
    student.name=name;
    student.rollNo=rollNo;
    student.marks=marks;
    return student;
}

var student3=createStudent("def",15,92);
console.log(student3);