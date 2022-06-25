var countInerval;
function startCounter(){
    var number = parseInt(document.getElementById("number").value);

    if(NaN(number)){
        alert("Please Enter a Valid Number");
        clearInterval(countInerval);
        return;
    }
    if(number<1 || number >9){
        alert("Enter Number between 1 and 0");
        clearInterval(countInerval);
        return;
    }

    var currNo=document.querySelector(".current.counter");
    var nextNo=document.querySelector(".counter.next");

    var count=0;
    resetNumbers(currNo,nextNo);
    clearInterval(countInerval);

    countInerval=setInterval(function(){
        if(count==number){
            clearInterval(countInerval);
            alert("Counting is Stoped!")
            return;
        }
        increaseCount(currNo,nextNo);
        count++;
    },1000);
    
}
function resetNumbers(currNo,nextNo){
    currNo.innerText=0;
    nextNo.innerText=1;
}
function increaseCount(currNo,nextNo,end){
    nextNo.classList.add("animate");

    setTimeout(function(){
        currNo.innerText=nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText=parseInt(nextNo.innerText)+1;
    },500);
}