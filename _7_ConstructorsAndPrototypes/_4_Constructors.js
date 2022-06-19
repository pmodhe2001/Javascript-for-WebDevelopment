function createStudent(name,rollNo,marks){
    //var student={}; //newObject();
    this.name=name;
    this.rollNo=rollNo;
    this.marks=marks;
    console.log(this);// student1 is bound to createstudent object while student2 is bound to window object use strict mode to remove window object bound
    //return student;
}

var student1=new createStudent("Ayush",13,100);
console.log(student1);
var student2=createStudent("Ayush 2",14,99);
console.log(student2);