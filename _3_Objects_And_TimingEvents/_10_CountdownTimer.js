// To run on VSCode : node _3_Objects_And_TimingEvents/_10_CountdownTimer.js

var Start=10;
function countDownTimer(){
   if(Start==0){
    console.log("Stop! Time is UP");
    clearInterval(instanceID);
    return;
   }
   console.log(Start,"! sec");
   Start--;
}
var instanceID=setInterval(countDownTimer,1000);