var world = [
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,2,1,1,1,1,2,1,2,1,1,2,1,1,1,1,2],
	[2,1,1,1,1,2,2,2,1,1,2,1,2,1,1,2,1,1,1,1,2],
	[2,1,1,1,1,2,1,1,1,1,2,1,2,1,1,2,1,2,1,1,2],
	[2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2,1,1,2],
	[2,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
	[2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
	[2,1,2,1,1,1,2,1,2,1,2,1,2,1,2,1,1,1,2,1,2],
	[2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	]
console.log(world[3][8])
function displayWorld(){
	var output = '';
	for (i=0;i<world.length;i++){
		output += "<div class='row'>";
		for (j=0;j<world[i].length;j++){
			if ( world[i][j] === 2){
				output += "<div class='brick'></div>";
			}
			else if (world[i][j] === 1){
				output += "<div class='coin'></div>";
			}
			else {
				output += "<div class='empty'></div>";
			}
		}
		output += "</div>";
	}
///				console.log(output)
	document.getElementById('world').innerHTML = output;
}
//			displayWorld();
var pacman = {
	x:	40,
	y:	40,
	pos:	[1,1],
	score:	0,
}
var ghost = {
	x:	560,
	y:	40,
	pos:	[14,1],
}
function displayScore(){
	document.getElementById('scoreboard').innerHTML = 'Score: '+pacman.score;
}
gpos= 3;
gpast= gpos;
gseed= Math.floor((Math.random() *4));
gseedp=gseed;
document.onkeydown = function(e){
	if(e.keyCode == 37){
		if(world[pacman.pos[1]][pacman.pos[0]-1] !== 2){
			pacman.x-=40;
			document.getElementById('pacman').classList.add("pac_left");
			document.getElementById('pacman').classList.remove("pac_up","pac_down");
			if(world[pacman.pos[1]][pacman.pos[0]-1] === 1){
				pacman.score+=100
			}
			pacman.pos[0] -=1;
		}
	}
	else if(e.keyCode == 38){
		if(world[pacman.pos[1]-1] [pacman.pos[0]] !== 2){
			pacman.y-=40;
			document.getElementById('pacman').classList.add("pac_up");
			document.getElementById('pacman').classList.remove("pac_left","pac_down");
			if(world[pacman.pos[1]-1][pacman.pos[0]] === 1){
				pacman.score+=100
			}
			pacman.pos[1] -=1
		}
	}
	else if(e.keyCode == 39){
		if(world[pacman.pos[1]][pacman.pos[0]+1] !== 2){
			pacman.x+=40;
			document.getElementById('pacman').classList.remove("pac_up","pac_down","pac_left");
			if(world[pacman.pos[1]][pacman.pos[0]+1] === 1){
				pacman.score+=100
			}
			pacman.pos[0] +=1
		}
	}
	else if(e.keyCode == 40){
		if(world[pacman.pos[1]+1][pacman.pos[0]] !== 2){
			pacman.y+=40;
			document.getElementById('pacman').classList.add("pac_down");
			document.getElementById('pacman').classList.remove("pac_up","pac_left");
			if(world[pacman.pos[1]+1][pacman.pos[0]] === 1){
				pacman.score+=100
			}
			pacman.pos[1] +=1;
		}
	}
	document.getElementById('pacman').style.left = pacman.x+'px';
	document.getElementById('pacman').style.top = pacman.y+'px';
	world[pacman.pos[1]][pacman.pos[0]] = 0;
	displayWorld();
	displayScore();

	if (gseedp >0){
		gseedp--
		gpos=gpast;
	}
	else {
		gseedp=gseed;
	}
	if (gpos === 0){
		if(world[ghost.pos[1]][ghost.pos[0]-1] !==2){
			ghost.x-=40;
			ghost.pos[0]-=1;
		}
	}
	else if (gpos === 1){
		if(world[ghost.pos[1]-1][ghost.pos[0]] !==2){
			ghost.y-=40;
			ghost.pos[1]-=1;
		}
	}
	else if (gpos === 2){
		if(world[ghost.pos[1]][ghost.pos[0]+1] !==2){
			ghost.x+=40;
			ghost.pos[0]+=1;
		}
	}
	else if (gpos === 3){
		if(world[ghost.pos[1]+1][ghost.pos[0]] !==2){
			ghost.y+=40;
			ghost.pos[1]+=1;
		}
	}
	document.getElementById('ghost').style.left = ghost.x+'px';
	document.getElementById('ghost').style.top = ghost.y+'px';
	console.log(gseed,gseedp,gpos);
	gpast=gpos;
	gpos = Math.floor((Math.random() * 4));
	gseed = Math.floor((Math.random()*6));
	if (pacman.x === ghost.x && pacman.y === ghost.y){
		document.getElementById('container').innerHTML= "<p style='font-size:120px;color:red;font-weight:bolder; text-align:center;'>PERDISTE C**********E</p><video autoplay loop><source src='never.mp4' type='video/mp4'></video>";
	}
	countcoins=0
	for (i=0;i<world.length;i++){
		for (o=0;o<world[i].length;o++){
			if (world[i][o] === 1){
				countcoins++
			}
		}
	}
	if (countcoins===0){
		document.getElementById('container').innerHTML= "<p>owo</p>"
	}
}
displayWorld();
world[pacman.pos[1]][pacman.pos[0]] = 0;
