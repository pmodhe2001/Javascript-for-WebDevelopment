
function fetchRandomDogImage(){
    var xhrRequest=new XMLHttpRequest();
    // to initialize the request

    xhrRequest.onload=function(){
        console.log(xhrRequest.response);
        var responseJSON=JSON.parse(xhrRequest.response);
        var imgURL=responseJSON.message;
        $('#fetchedImg').attr('src',imgURL);
    };

    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);// get is method
                                   // middle one is link
                                   // true for 
     xhrRequest.send();                              
}
$('#fetchDogImgButton').click(fetchRandomDogImage); // Here we have fetched button and activated
                                                    // fetchRandomDogImage function