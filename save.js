var saveButton = document.getElementById("save");

saveButton.addEventListener("click", saveImage);

function saveImage(){

	var data = canvas.toDataURL();

	var request;

	if(window.XMLHttpRequest){

		request = new XMLHttpRequest();

	}
	else
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");

	}

	request.onreadystatechange = function(){

		if(request.readyState == 4 && request.status == 200){

			var response = request.responseText;

			//window.open('download.php?file='+response, '_blank', 'location=0, menubar=0');
			document.getElementById("downloadframe").src = 'download.php?file='+response;
	
		}

	}


	request.open('POST', 'save.php', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send('img='+data);

}