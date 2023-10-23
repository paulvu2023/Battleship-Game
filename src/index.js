import { Ship, Player, AI } from "./game";
import {
  updateBoardDisplay,
  resetBoardDisplay,
  updateShipCountDisplay,
  displayGameoverPopup,
} from "./display";
import "./styles.css";

const newGameButton = document.getElementById("newgame");
let player = null;
let ai = null;

newGameButton.addEventListener("click", () => {
  document.querySelector(".gameover").close();
  resetBoardDisplay(player);
  resetBoardDisplay(ai);
  newGame();
});

document.addEventListener("DOMContentLoaded", (event) => {
  newGame();
});

function newGame() {
  player = new Player();
  ai = new AI();

  player.chooseEnemy(ai);
  ai.chooseEnemy(player);

  const playerShip = new Ship(5);
  const AIShip = new Ship(5);

  player.gameboard.placeShip(playerShip, 0, 0);
  ai.gameboard.placeShip(AIShip, 0, 0);

  updateShipCountDisplay(player);
  updateShipCountDisplay(ai, true);

  const AIBoard = document.querySelectorAll(".ai-board .square");
  AIBoard.forEach((square) => {
    square.addEventListener("click", () => {
      const coordinates = square.id
        .replace("p", "")
        .replace("a", "")
        .split("-");
      player.attack(parseInt(coordinates[0]), parseInt(coordinates[1]));
      updateBoardDisplay(ai, true);
      setTimeout(() => {
        ai.attack();
        updateBoardDisplay(player);
      }, 1000);
      if (player.gameboard.shipCount === 0) {
        displayGameoverPopup("lose");
      } else if (ai.gameboard.shipCount === 0) {
        displayGameoverPopup("win");
      }
    });
  });
}
