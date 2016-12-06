var board = new Array(3);

function Clearcell(x, y){
	board[x][y] = 0;
	cell = document.getElementById("c" + x + y);
	cell.innerHTML = "";
}
	
function ClearBoard(){
	for (i=0; i<3; i++)
		for (j=0; j<3; j++){
			board[i][j] = 0;
			cell = document.getElementById("c" + i + j);
			cell.innerHTML = "";
		}
}

function PaintCell (x, y){
	cell = document.getElementById("c" + x + y);
	cell.innerHTML = "<img src=ball.gif></img>";
}

function autoplay(){

	for (i=0; i<3; i++) board[i] = new Array(3);
		
	cell = document.getElementById("c00")		;
	cell.innerHTML = "<img src=ball.gif></img>";

	ClearBoard();
	
}

autoplay();