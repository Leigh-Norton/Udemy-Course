var carPic = document.createElement("img");
var carPicLoaded = false;

var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

function carImageLoad()
{
	carPic.onload = function()
	{
		carPicLoaded = true;
	}
	carPic.src = "PlayerOneCar.png";
}

function trackImagesLoad()
{
	roadPic.src = "Track_Road.png";
	wallPic.src = "Track_Wall.png";
}

function loadImages()
{
	carImageLoad();
	trackImagesLoad();
}