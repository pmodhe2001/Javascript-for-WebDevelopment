var outerDiv = document.getElementById('outer');

outerDiv.addEventListener('mouseover',function(){
   console.log("Mourse Over") // Check output on console
});

outerDiv.addEventListener('mouseout',function(){
    console.log("Mouse Out") // Check output on console
 });

 var searchInput = document.getElementById('search');
 searchInput.addEventListener('keypress',function(){
    console.log("Key is Pressed!")
 });

 var IPbox = document.getElementById('box');
 IPbox.addEventListener('keydown',function(event){
       console.log('Key down',event.keyCode);
 });