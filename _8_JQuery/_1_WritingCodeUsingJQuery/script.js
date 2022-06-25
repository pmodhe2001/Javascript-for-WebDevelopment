/*var para1=document.getElementById('para1');
para1.innerHTML="Text Changed";*/
/*
$('#para1').html('Text Changed !');
$('#para2').hide();*/
//$('#para1').width(100);
var paras=$('p');
var p1=paras.eq(0);  // Square bracket returns dom object 
p1.text("Hello JQuery"); // eq returns dom object
var p2=paras.eq(1);
p2.html("Second Para from top");
/*
Genneral Working
function $(query){
    return document.queryselector(query); //This returns D while all above return JQuery object
}
*/