$('div').css({
    width:"300px",
    height:"300px",
    backgroundColor:"aqua"
});
/*
$('div').click(function(){
      alert("Div is Clicked!");
});
*/

/*
$('div').on('click',function(){
   alert("Div is Clicked!");
});*/

$('a').on('click',function(event){
    event.preventDefault();
     alert("Anchor Tag Clicked");
});

//Fetch element which was clicked
$('div').on('click',function(){
      var element =  $(this);
      element.width(element.width()+10+"px")
});