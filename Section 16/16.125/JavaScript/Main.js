var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();

window.onload = function()
{
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	colorRect(0,0, canvas.width,canvas.height, "black");
	colorText("LOADING IMAGES", canvas.width/2,canvas.height/2, "white");
	
	loadImages();
}
	
function imageLoadingDoneSoStartGame()
{
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
	blueCar.reset(carPic, "Green Machine");
	greenCar.reset(otherCarPic, "Blue Storm");
}

function updateAll()
{
	moveAll();
	drawAll();
}

function moveAll()
{
	blueCar.move();
	greenCar.move();
}	

function clearScreen()
{
	colorRect(0,0, canvas.width,canvas.height, 'black');
	
}

function drawAll()
{
	drawTracks();
	blueCar.draw();
	greenCar.draw();
}