function resetBoardDisplay() {
  for (let i = 0; i < player.gameboard.board.length; i++) {
    for (let j = 0; j < player.gameboard.board.length; j++) {
      const thisPlayerSquare = document.getElementById(`p${i}-${j}`);
      const thisAISquare = document.getElementById(`a${i}-${j}`);
      thisPlayerSquare.style.backgroundColor = "transparent";
      thisAISquare.style.backgroundColor = "transparent";
    }
  }
}

function updateBoardDisplay(player, isAI = false) {
  // 'player' could be either the user or the AI
  for (let i = 0; i < player.gameboard.board.length; i++) {
    for (let j = 0; j < player.gameboard.board.length; j++) {
      let thisSquare = null;
      if (isAI) {
        thisSquare = document.getElementById(`a${i}-${j}`);
      } else {
        thisSquare = document.getElementById(`p${i}-${j}`);
      }
      if (player.gameboard.board[i][j] === "Miss") {
        thisSquare.style.backgroundColor = "#0f3366";
      } else if (player.gameboard.board[i][j] === "Hit") {
        thisSquare.style.backgroundColor = "red";
      }
    }
  }
}

export { updateBoardDisplay, resetBoardDisplay };
