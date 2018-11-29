const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_GAP = 2;
const WORLD_COLS = 16;
const WORLD_ROWS = 12; 

var levelOne =  [4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 5, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 4, 5, 1, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				 1, 0, 0, 1, 4, 4, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0,
				 1, 0, 0, 1, 4, 4, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0,
				 1, 0, 0, 1, 4, 4, 1, 0, 0, 5, 0, 0, 0, 1, 1, 0,
				 1, 2, 0, 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
				 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 5, 0, 0, 1, 4];
				 
var worldGrid = [];

				
const WORLD_FLOOR = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_GOLD = 3;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;

function returnTileTypeAtColRow(col, row)
{
	if (col >= 0 && col < WORLD_COLS &&
		row >= 0 && row < WORLD_ROWS)
	{
		var worldIndexUnderCoord = rowColToArrayIndex(col, row);
		return (worldGrid[worldIndexUnderCoord]);
	}
	else
	{
		return WORLD_WALL;
	}
}

function warriorWorldHandling(atX,atY)
{
	var warriorWorldCol = Math.floor(atX / WORLD_W);
	var warriorWorldRow = Math.floor(atY / WORLD_H);
	var worldIndexUnderwarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);
	
	if (warriorWorldCol >= 0 && warriorWorldCol < WORLD_COLS && 
		warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS)
	{
		var tileHere = returnTileTypeAtColRow(warriorWorldCol,warriorWorldRow);
		
		return worldIndexUnderwarrior;
	} // End of valid col and row
} // End of warriorWorldHandling

function rowColToArrayIndex(col, row)
{
	return col + WORLD_COLS * row;
}

function tileTypeHasTransparency(checkFileType)
{
		return (checkFileType == WORLD_DOOR ||
				checkFileType == WORLD_GOLD ||
				checkFileType == WORLD_KEY);
	
}

function drawWorlds()
{
	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++)
	{
		for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++)
		{
			var tileKindHere = worldGrid[arrayIndex];
			var useImg = worldPics[tileKindHere];
			
			if (tileTypeHasTransparency(tileKindHere))
			{
				canvasContext.drawImage(worldPics[WORLD_FLOOR], drawTileX,drawTileY);
			}
			canvasContext.drawImage(useImg, drawTileX,drawTileY);
			
			drawTileX += WORLD_W;
			arrayIndex++;
		} // End of for each world
		drawTileY += WORLD_H;
		drawTileX = 0;
	} // End of drawWorld func
}