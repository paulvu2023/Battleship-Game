function updateShipName(shipLength) {
  const shipName = document.querySelector(".place-your span");
  if (shipLength === 5) {
    shipName.textContent = "Carrier";
  } else if (shipLength === 4) {
    shipName.textContent = "Battleship";
  } else if (shipLength === 3) {
    shipName.textContent = "Cruiser";
  } else if (shipLength === 2) {
    shipName.textContent = "Destroyer";
  }
}

function handleSquareHover(direction, length) {
  const squareId = this.id;
  const [row, col] = squareId.replace("pl", "").split("-");
  let adjacentSquares = [];

  if (direction === "vertical") {
    for (let i = 1; i < length; i++) {
      const newRow = String(Number(row) + i);
      const adjacentSquare = document.getElementById(`pl${newRow}-${col}`);
      if (adjacentSquare) {
        adjacentSquares.push(adjacentSquare);
      }
    }
  } else if (direction === "horizontal") {
    for (let i = 1; i < length; i++) {
      const newCol = String(Number(col) + i);
      const adjacentSquare = document.getElementById(`pl${row}-${newCol}`);
      if (adjacentSquare) {
        adjacentSquares.push(adjacentSquare);
      }
    }
  }

  adjacentSquares.forEach((square) => {
    square.style.backgroundColor = "#00c1fc";
  });
}

function handleRevertAdjacentSquares(direction, length) {
  const squareId = this.id;
  const [row, col] = squareId.replace("pl", "").split("-");
  let adjacentSquares = [];

  if (direction === "vertical") {
    for (let i = 1; i < length; i++) {
      const newRow = String(Number(row) + i);
      const adjacentSquare = document.getElementById(`pl${newRow}-${col}`);
      if (adjacentSquare) {
        adjacentSquares.push(adjacentSquare);
      }
    }
  } else if (direction === "horizontal") {
    for (let i = 1; i < length; i++) {
      const newCol = String(Number(col) + i);
      const adjacentSquare = document.getElementById(`pl${row}-${newCol}`);
      if (adjacentSquare) {
        adjacentSquares.push(adjacentSquare);
      }
    }
  }

  adjacentSquares.forEach((square) => {
    square.style.backgroundColor = "transparent";
  });
}

function closePlaceshipPopup() {
  const popup = document.querySelector(".place-ships");
  popup.close();
}

function displayPlaceshipPopup() {
  const popup = document.querySelector(".place-ships");
  popup.showModal();
}

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
      } else if (typeof player.gameboard.board[i][j] === "object") {
        if (!isAI) {
          thisSquare.style.color = "#00c1fc";
        }
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
  displayPlaceshipPopup,
  handleSquareHover,
  handleRevertAdjacentSquares,
  updateShipName,
  closePlaceshipPopup,
};
