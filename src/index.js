import { Ship, Player, AI } from "./game";
import {
  updateBoardDisplay,
  resetBoardDisplay,
  updateShipCountDisplay,
  displayGameoverPopup,
  displayPlaceshipPopup,
  handleSquareHover,
  handleRevertAdjacentSquares,
  updateShipName,
  closePlaceshipPopup,
} from "./display";
import "./styles.css";

const newGameButton = document.getElementById("newgame");
const placementSquares = document.querySelectorAll(".placement-board .square");
const rotateButton = document.querySelector(".rotate");
let player = null;
let ai = null;
let canUserClick = true;
let shipLength = 5;
let shipDirection = "vertical";

rotateButton.addEventListener("click", () => {
  if (shipDirection === "vertical") {
    shipDirection = "horizontal";
  } else {
    shipDirection = "vertical";
  }
});

newGameButton.addEventListener("click", () => {
  document.querySelector(".gameover").close();
  resetBoardDisplay();
  newGame();
});

document.addEventListener("DOMContentLoaded", (event) => {
  newGame();
  placementSquares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      handleSquareHover.call(this, shipDirection, shipLength);
    });

    square.addEventListener("mouseout", function () {
      handleRevertAdjacentSquares.call(this, shipDirection, shipLength, player);
    });

    square.addEventListener("click", function () {
      placeShip.call(this);
    });
  });
});

const AIBoard = document.querySelectorAll(".ai-board .square");
AIBoard.forEach((square) => {
  square.addEventListener("click", () => {
    if (canUserClick) {
      canUserClick = false; // Disable further clicks
      const coordinates = square.id
        .replace("p", "")
        .replace("a", "")
        .split("-");
      let hit = player.attack(
        parseInt(coordinates[0]),
        parseInt(coordinates[1])
      );
      if (hit) {
        // play hit sound
      } else {
        playSplash();
      }
      updateBoardDisplay(ai, true);
      setTimeout(() => {
        ai.attack();
        updateBoardDisplay(player);
        canUserClick = true; // Enable clicks after 1 second
      }, 500);
      if (player.gameboard.shipCount === 0) {
        displayGameoverPopup("lose");
      } else if (ai.gameboard.shipCount === 0) {
        displayGameoverPopup("win");
      }
    }
  });
});

function playSplash() {
  const splashSound = document.getElementById("splash");
  splashSound.currentTime = 0;
  splashSound.volume = 0.5;
  splashSound.play();
}

function placeAIShips() {
  let aiShipLength = 5;
  let direction = "horizontal";
  while (aiShipLength >= 2) {
    let xCoord = Math.floor(Math.random() * 10);
    let yCoord = Math.floor(Math.random() * 10);
    let ship = new Ship(aiShipLength);
    let placedShip = ai.gameboard.placeShip(ship, xCoord, yCoord, direction);
    if (placedShip) {
      aiShipLength -= 1;
    }
    if (direction === "horizontal") {
      direction = "vertical";
    } else {
      direction = "horizontal";
    }
  }
}

function placeShip() {
  let coordinates = this.id.replace("pl", "").split("-");
  const playerShip = new Ship(shipLength);
  const placedShip = player.gameboard.placeShip(
    playerShip,
    parseInt(coordinates[0]),
    parseInt(coordinates[1]),
    shipDirection
  );
  if (placedShip === true) {
    shipLength -= 1;
  }
  updateShipCountDisplay(player);
  updateShipName(shipLength);
  if (shipLength <= 1) {
    closePlaceshipPopup();
  }
  updateBoardDisplay(player);
}

function newGame() {
  shipLength = 5;
  player = new Player();
  ai = new AI();

  player.chooseEnemy(ai);
  ai.chooseEnemy(player);

  placeAIShips();
  updateBoardDisplay(ai, true);

  updateShipName(shipLength);
  displayPlaceshipPopup();
  updateShipCountDisplay(ai, true);
}

export { playSplash };
