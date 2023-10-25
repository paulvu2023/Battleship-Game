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
  resetBoardDisplay(player);
  resetBoardDisplay(ai);
  newGame();
});

document.addEventListener("DOMContentLoaded", (event) => {
  placementSquares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      handleSquareHover.call(this, shipDirection, shipLength);
    });

    square.addEventListener("mouseout", function () {
      this.style.backgroundColor = "transparent";
      handleRevertAdjacentSquares.call(this, shipDirection, shipLength);
    });

    square.addEventListener("click", function () {
      placeShip(this);
    });
  });
  newGame();
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
      player.attack(parseInt(coordinates[0]), parseInt(coordinates[1]));
      updateBoardDisplay(ai, true);
      setTimeout(() => {
        ai.attack();
        updateBoardDisplay(player);
        canUserClick = true; // Enable clicks after 1 second
      }, 1000);
      if (player.gameboard.shipCount === 0) {
        displayGameoverPopup("lose");
      } else if (ai.gameboard.shipCount === 0) {
        displayGameoverPopup("win");
      }
    }
  });
});

function placeShip() {
  let coordinates = this.id.replace("pl", "").split("-");
  const playerShip = new Ship(shipLength);
  player.gameboard.placeShip(playerShip, coordinates[0], coordinates[1]);
  shipLength -= 1;
  if (shipLength <= 1) {
    closePlaceshipPopup();
  }
}

function newGame() {
  shipLength = 5;
  player = new Player();
  ai = new AI();

  player.chooseEnemy(ai);
  ai.chooseEnemy(player);

  displayPlaceshipPopup();

  const playerShip = new Ship(5);
  const AIShip = new Ship(5);

  player.gameboard.placeShip(playerShip, 0, 0);
  ai.gameboard.placeShip(AIShip, 0, 0);

  updateShipCountDisplay(player);
  updateShipCountDisplay(ai, true);
}
