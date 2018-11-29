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

function beginLoadingImage(imgVar, fileName)
{
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = fileName;
}

function loadImages()
{
	beginLoadingImage(carPic, "PlayerOneCar.png");
	beginLoadingImage(roadPic, "Track_Road.png");
	beginLoadingImage(wallPic, "Track_Wall.png");
}