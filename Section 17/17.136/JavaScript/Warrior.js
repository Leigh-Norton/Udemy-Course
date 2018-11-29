const GROUNDSPEED_DECAY_MULT = 0.94;
const PLAYER_MOVE_SPEED = 3;

function warriorClass()
{
	this.x = 75;
	this.y = 75;
	this.speed = 0;
	this.ang = 0
	this.myWarriorPic; // Which picture to use
	this.name = "Untitled Warrior";
	
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
		
		for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++)
		{
			for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++)
			{
				var arrayIndex = rowColToArrayIndex(eachCol,eachRow);
				
				if (worldGrid[arrayIndex] == WORLD_PLAYERSTART)
				{
					worldGrid[arrayIndex] = WORLD_ROAD; // Replace with road
					this.ang = -Math.PI/2
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
			console.log("key pressed");
			console.log(this.x);
			console.log(nextY);
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
		
		var walkIntotile = warriorWorldHandling(nextX,nextY);
		
		if (walkIntotile == WORLD_ROAD)
		{
			this.x = nextX;
			this.y = nextY;
		}
		
	}

	this.draw = function()
	{
		drawBitmapCenteredWithRotation(this.myWarriorPic, this.x,this.y, this.ang);
	}
}