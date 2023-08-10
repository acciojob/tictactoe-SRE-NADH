//your JS code here. If required.
let gridItem = document.querySelectorAll(".game > div");
let form = document.forms[0];
let game=document.getElementsByClassName("game")[0];
let player1,player2,turn;

 form.addEventListener("submit",addPlayers);
function addPlayers(e) {
	e.preventDefault();
	player1 = form["name1"].value;
	player2 = form["name2"].value;
	turn=1;
    game.setAttribute("data-game-enabled","true");
	updateName();
 }

function updateName(){
	let name = (turn===1?player1:player2);
	let p = document.getElementsByClassName("playername")[0];
	p.innerText = `${name} you are up`
}

for(let i=0;i<gridItem.length;i++){
		gridItem[i].addEventListener("click",updateGame);
}

function updateGame(e){
	if(game.getAttribute("data-game-enabled")=="false"){
		return;
	}
	if(e.target.innerText!=""){
		return;
	}
	if(turn==1){
	 e.target.innerText="x";
		turn=2;
	}
	else{
		e.target.innerText="o";
		turn=1;
	}
	updateName();
}




