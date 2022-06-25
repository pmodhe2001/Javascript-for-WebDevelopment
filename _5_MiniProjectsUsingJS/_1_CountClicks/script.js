var clicks=document.getElementById("area");
var count=0;
var clickCounts=document.getElementById("click-count");
clicks.addEventListener('click',function(){
    count++;
    console.log(count);
    clickCounts.innerText=count+"";
});