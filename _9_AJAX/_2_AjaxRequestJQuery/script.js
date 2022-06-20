
/*
1st Method
$.ajax({
    url:'https://dog.ceo/api/breeds/image/random',
    method:'GET',
    success:function(data){{
        var imgURL=data.message;
        $('#fetchedImg').attr('src',imgURL);
    }}
});
*/
$.get('https://dog.ceo/api/breeds/image/random',function(data){
    var imgURL=data.message;
    $('#fetchedImg').attr('src',imgURL);
});
$('#fetchDogImgButton').click(fetchRandomDogImage);