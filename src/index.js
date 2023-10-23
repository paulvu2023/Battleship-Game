import { Ship, Player, AI } from "./game";
import { updateBoardDisplay } from "./display";
import "./styles.css";

let player = null;
let ai = null;

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
        // Show win screen
      } else if (ai.gameboard.shipCount === 0) {
        // Show lose screen
      }
    });
  });
}
