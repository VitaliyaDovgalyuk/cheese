//function api() {
//	var input = "";
//	input = document.getElementById("myInput").value;
//	console.log("Hello000");
//// $.ajax({
//// type : "GET",
//// url : "http://numbersapi.com/" + input + "?json",
//// dataType : "json",
//// success : function(response) {
//// document.getElementById("lol").innerHTML = response.text;
////
//// }
//// });
//	
//	var xhr = $.get(`https://api.giphy.com/v1/gifs/random?api_key=g52ORoGmlnO0MLOFMfWrCJBq0ukDiQgd&tag=$('#myInput.')`
//			);
//}

callApi = (n) => {
	var xhr = $.get(`https://api.giphy.com/v1/gifs/random?api_key=g52ORoGmlnO0MLOFMfWrCJBq0ukDiQgd&tag=${n.value.toLowerCase()}&limit=1`);
	xhr.done(function(data) {
	  document.getElementById("genImage").src = data.data.images.original.url;
	  
	});
}

sendPOST = (n) => {
    $.ajax({
        url: "http://localhost:8080/save",
        type: "POST",
        data: { user_id:`${n.value.toLowerCase()}`},
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    processResponse(result);
                    break;
                default:
                    resultDiv.html(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
}


