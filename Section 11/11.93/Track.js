var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15; 

var trackGrid = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
				 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
				 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
				 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1,
				 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,
				 1, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
				
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;

function trackImagesLoad()
{
	roadPic.src = "Track_Road.png";
	wallPic.src = "Track_Wall.png";
}

function isWallAtColRow(col, row)
{
	if (col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS)
	{
		var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		return (trackGrid[trackIndexUnderCoord] == TRACK_WALL);
	}
	else
	{
		return false;
	}
}

function carTrackHandling()
{
	var carTrackCol = Math.floor(carX / TRACK_W);
	var carTrackRow = Math.floor(carY / TRACK_H);
	var trackIndexUndercar = rowColToArrayIndex(carTrackCol, carTrackRow);
				
	if (carTrackCol >= 0 && carTrackCol < TRACK_COLS && 
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS)
	{
		if (isWallAtColRow(carTrackCol,carTrackRow))
		{			
			carX -= Math.cos(carAng) * carSpeed;
			carY -= Math.sin(carAng) * carSpeed;
			carSpeed *= -0.5;
		} // End of track found
	} // End of valid col and row
} // End of carTrackHandling

function rowColToArrayIndex(col, row)
{
	return col + TRACK_COLS * row;
}

function drawTracks()
{
	for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++)
	{
		for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++)
		{
			var arrayIndex = rowColToArrayIndex(eachCol,eachRow);
			
			if (trackGrid[arrayIndex] == TRACK_ROAD)
			{
				canvasContext.drawImage(roadPic, TRACK_W*eachCol,TRACK_H*eachRow);
			} // End of is this track here
			else if (trackGrid[arrayIndex] == TRACK_WALL)
			{
				canvasContext.drawImage(wallPic, TRACK_W*eachCol,TRACK_H*eachRow);
			} // End of is this wall here
		} // End of for each track
	} // End of drawTrack func
}