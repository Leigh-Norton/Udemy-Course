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
		{varName: warriorPic, theFile: "PlayerOneCar.png"},
		
		{worldType: WORLD_ROAD, theFile: "Track_Road.png"},
		{worldType: WORLD_WALL, theFile: "Track_Wall.png"},
		{worldType: WORLD_TREE, theFile: "Track_Trees.png"},
		{worldType: WORLD_FLAG, theFile: "Track_Flag.png"},
		{worldType: WORLD_GOAL, theFile: "Track_Goal.png"}
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