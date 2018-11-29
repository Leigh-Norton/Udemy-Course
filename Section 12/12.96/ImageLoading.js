var carPic = document.createElement("img");

var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 3;

function countLoadedImagesAndLaunchIfReady()
{
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0)
	{
		imageLoadingDoneSoStartGame();		
	}
	
}

function carImageLoad()
{
	carPic.onload = countLoadedImagesAndLaunchIfReady;
	carPic.src = "PlayerOneCar.png";
}

function trackImagesLoad()
{
	roadPic.onload = countLoadedImagesAndLaunchIfReady;
	wallPic.onload = countLoadedImagesAndLaunchIfReady;
	roadPic.src = "Track_Road.png";
	wallPic.src = "Track_Wall.png";
}

function loadImages()
{
	carImageLoad();
	trackImagesLoad();
}