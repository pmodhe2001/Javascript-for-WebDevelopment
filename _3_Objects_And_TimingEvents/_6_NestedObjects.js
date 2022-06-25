// To run on VSCode : node _3_Objects_And_TimingEvents/_6_NestedObjects.js
var student={
    "name":"George",
    gender:"Male",
    school:"Xavier's Public School",
     address:{
        district:"Mumbai",
        state:"Maharashtra",
    }
    
};
console.log(student);
console.log(student.address);
console.log(student.address["district"]);