var warriorPic = document.createElement("img");

var worldPics = [];

var picsToLoad = 0; // Set automatically based on image list in loadImages

function countLoadedImagesAndLaunchIfReady()
{
	picsToLoad--;
	//console.log(picsToLoad);
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

function loadImageForWorldCode(worldCode, fileName)
{
		worldPics[worldCode] = document.createElement("img");
		beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages()
{
	var imageList = 
		[
		{varName: warriorPic, theFile: "Adventure_Player.png"},
		
		{worldType: WORLD_FLOOR, theFile: "Adventure_Floor.png"},
		{worldType: WORLD_WALL, theFile: "Adventure_Wall.png"},
		{worldType: WORLD_KEY, theFile: "Adventure_Key.png"},
		{worldType: WORLD_DOOR, theFile: "Adventure_Door.png"},
		{worldType: WORLD_GOLD, theFile: "Adventure_Gold.png"}
		];
	
	picsToLoad = imageList.length;
	
	for (var i=0; i<imageList.length; i++)
	{
		if (imageList[i].varName != undefined)
		{
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);	
		}
		else
		{
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
	}

}