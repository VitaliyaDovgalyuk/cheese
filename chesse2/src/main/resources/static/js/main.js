function api(){
  var test = "test";
  test= document.getElementById("myInput").value;
        $.ajax({
           type: "GET",
           url: "http://numbersapi.com/"+test+"?json",
           dataType: "json",
           success: function(response){
           document.getElementById("lol").innerHTML = response.text;

           }
        });
 }
