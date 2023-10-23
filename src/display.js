function displayGameoverPopup(winOrLose) {
  const popup = document.querySelector(".gameover");
  const winMessage = document.querySelector(".who-won");
  if ((winOrLose = "win")) {
    winMessage.textContent = "YOU WIN";
  } else {
    winMessage.textContent = "YOU LOSE";
  }
  popup.showModal();
}

function updateShipCountDisplay(player, isAI = false) {
  if (isAI) {
    document.querySelector(".ai-ship-count span").textContent =
      player.gameboard.shipCount;
  } else {
    document.querySelector(".player-ship-count span").textContent =
      player.gameboard.shipCount;
  }
}

function resetBoardDisplay(player) {
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
  updateShipCountDisplay(player, isAI);
}

export {
  updateBoardDisplay,
  resetBoardDisplay,
  updateShipCountDisplay,
  displayGameoverPopup,
};
