var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (var i = 0, n = colors.length; i < n; i++) {
 	
 	var swatch = document.createElement('div');
 	swatch.className = "swatch";
 	swatch.style.backgroundColor = colors[i];
 	swatch.addEventListener('click', setSwatch);
 	document.getElementById('colors').appendChild(swatch);

};

function setColor(color){

	// change canvas context to new color
	context.fillStyle = color;
	context.strokeStyle = color;

	// do a search for elements with the class of 'active' (we expect there to be only one)
	var elementsArray = document.getElementsByClassName('active');

	// from the array, take the first (and probably only) item
	var active = elementsArray[0];

	if(active){	// we do this if statement, just in case the array was actually empty - and for the first run!

		// remove the 'active' class from that swatch (so it becomes 'swatch' instead of 'swatch active')
		active.className = 'swatch';
	}

}

function setSwatch(e){

	//identify
	var swatch = e.target;
	//set color
	setColor(swatch.style.backgroundColor);
	//give active class to the swatch that was just clicked
	swatch.className += ' active';

}	

setSwatch({target: document.getElementsByClassName('swatch')[0]});



