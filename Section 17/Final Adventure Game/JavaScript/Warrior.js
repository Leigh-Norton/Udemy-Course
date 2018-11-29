const GROUNDSPEED_DECAY_MULT = 0.94;
const PLAYER_MOVE_SPEED = 4;

function warriorClass()
{
	this.x = 75;
	this.y = 75;
	this.speed = 0;
	this.ang = 0
	this.myWarriorPic; // Which picture to use
	this.name = "Untitled Warrior";
	this.keysHeld = 0;
	
	this.keyHeld_North = false;
	this.keyHeld_South = false;
	this.keyHeld_West = false;
	this.keyHeld_East = false;
	
	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;
	
	this.setupInput = function(upKey, rightKey, downKey, leftKey)
	{
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}

	this.reset = function(whichImage, warriorName)
	{
		this.name = warriorName;
		this.myWarriorPic = whichImage;
		this.speed = 0;
		this.keysHeld = 0;
		
		for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++)
		{
			for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++)
			{
				var arrayIndex = rowColToArrayIndex(eachCol,eachRow);
				
				if (worldGrid[arrayIndex] == WORLD_PLAYERSTART)
				{
					worldGrid[arrayIndex] = WORLD_FLOOR; // Replace with road
					//this.ang = -Math.PI/2
					this.x = eachCol * WORLD_W + WORLD_W/2;
					this.y = eachRow * WORLD_H + WORLD_H/2;
					return;
				} // End of player start if
			} // End of col for	
		} // End of row for
		console.log("NO PLAYER START FOUND");
	} // End of warriorReset func

	this.move = function()
	{
		var nextX = this.x;
		var nextY = this.y;
		
		if (this.keyHeld_North)
		{
			nextY -= PLAYER_MOVE_SPEED;
		}
		if (this.keyHeld_South)
		{
			nextY += PLAYER_MOVE_SPEED;
		}
		if (this.keyHeld_West)
		{
			nextX -= PLAYER_MOVE_SPEED;
		}
		if (this.keyHeld_East)
		{
			nextX += PLAYER_MOVE_SPEED;
		}
		
		var walkIntoTile = warriorWorldHandling(nextX,nextY);
		var walkIntoTileType = WORLD_WALL;
		
		if (walkIntoTile !=undefined)
		{
			walkIntoTileType = worldGrid[walkIntoTile];
		}
		
		switch(walkIntoTileType)
		{
			case WORLD_FLOOR:
				this.x = nextX;
				this.y = nextY;
				break;
			case WORLD_KEY:
				this.keysHeld++;
				console.log("Keys Held: " + this.keysHeld);
				worldGrid[walkIntoTile] = WORLD_FLOOR;
				break;
			case WORLD_DOOR:
				if(this.keysHeld > 0)
				{
					this.keysHeld--;
					worldGrid[walkIntoTile] = WORLD_FLOOR;
				}
				break;
			case WORLD_GOLD:
				//this.reset();
				loadLevel(levelOne);
				break;
			
		}	
	}

	this.draw = function()
	{
		drawBitmapCenteredWithRotation(this.myWarriorPic, this.x,this.y, this.ang);
	}
}