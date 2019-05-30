var canvas = document.getElementById("canvas");
var buttonClear = document.getElementById("clear");
var context = canvas.getContext("2d");
var dragging = false;
var radius = 10;


//window.onresize = function(){
	//var image = canvas.getImageData(0,0, canvas.width, canvas.height);	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;	
	//canvas.putImageData(image,0,0);
//}

function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

context.lineWidth = radius*2;


function drawCircle(e){

	if(dragging){
		
		// this draws a line from the point we set up on the last run of this function, to the point where the mouse is now.
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		

		// this draws a circle where the mouse currently is
		context.beginPath();
		context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
		//context.fillStyle="#000";
		context.fill();


		// this begins a new path, and places the beginning of the path where the mouse currently is
		// ...but doesn't draw anything yet.
		// we are merely setting up the path for the next mouse position.
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);

	}
}


function engage(e){

	dragging = true;	
	drawCircle(e);

}

function disengage(){

	dragging = false;
	context.beginPath(); // forget about any path we were drawing, so we start a new path on the next mousedown

}


canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", drawCircle);
canvas.addEventListener("mouseup", disengage);
buttonClear.addEventListener("click", clearCanvas);

	
