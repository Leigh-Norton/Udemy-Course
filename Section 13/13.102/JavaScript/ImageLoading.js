var carPic = document.createElement("img");

var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 0; // Set automatically based on image list in loadImages

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
	imgVar.src = "Images/"+fileName;
}

function loadImages()
{
	var imageList = 
		[
		{varName: carPic, theFile: "PlayerOneCar.png"},
		{varName: roadPic, theFile: "Track_Road.png"},
		{varName: wallPic, theFile: "Track_Wall.png"}
		];
	
	picsToLoad = imageList.length;
	
	for (var i=0; i<imageList.length; i++)
	{
		beginLoadingImage(imageList[i].varName, imageList[i].theFile);	
	}

}