//your JS code here. If required.
let gridItem = document.querySelectorAll(".game > div");
let form = document.forms[0];
let game=document.getElementsByClassName("game")[0];
let player1,player2,turn;

let arr = [
	           ["", "", ""],
               ["", "", ""],
               ["", "", ""],
			]

 form.addEventListener("submit",addPlayers);
function addPlayers(e) {
	e.preventDefault();
	player1 = form["name1"].value;
	player2 = form["name2"].value;
	turn=1;
    game.setAttribute("data-game-enabled","true");
	game.style.display="grid";
	updateName();
 }

function updateName(){
	let name = (turn===1?player1:player2);
	let p = document.getElementsByClassName("playername")[0];
	p.innerText = `${name}, you are up`
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
	fillArray(e.target.id);
}

function fillArray(id){
	let val = turn==1?"x":"o";
	let win = turn==1?player1:player2;
	let row =Math.trunc((id-1)/3);
	let col =(id-1)%3;
	arr[row][col] = val;
    let p = document.getElementsByClassName("playername")[0];
	 for(let i = 0 ; i < 3; i++) {
        if(arr[i][0] && arr[i][0]=== arr[i][1] && arr[i][1] === arr[i][2]) {
        p.innerText = `${player1}, congradulation you won!`;
			 game.setAttribute("data-game-enabled","false");
			return;
        }
        if(arr[0][i] && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
            // i th column is matched
			 p.innerText = `${player1}, congradulation you won!`;
			 game.setAttribute("data-game-enabled","false");
			return;
        }
    }
	 if(arr[0][0] && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        // main diagonal matched
		  p.innerText = `${player1}, congradulation you won!`;
		  game.setAttribute("data-game-enabled","false");
		 return;
    }
    if(arr[0][2] && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]){
        // cross diagonal is a match now .
		 p.innerText = `${player1}, congradulation you won!`;
		  game.setAttribute("data-game-enabled","false");
		return
    }
}


