var minRad = 0.5;
var maxRad = 100;
var defaultRad = 20;
var interval = 5;
var radSpan = document.getElementById("radval");
var decRad = document.getElementById("decrad");
var incRad = document.getElementById("incrad");


function setRadius(newRadius){

	if(newRadius < minRad){

		newRadius = minRad;
	}
	else if(newRadius > maxRad)
	{
		newRadius = maxRad;
	}

	radius = newRadius;	
	context.lineWidth = radius*2;

	radSpan.innerHTML = radius;

}



decRad.addEventListener("click", function(){

	setRadius(radius - interval);

});



incRad.addEventListener("click", function(){

	setRadius(radius + interval);

});


