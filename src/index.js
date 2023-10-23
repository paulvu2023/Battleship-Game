import { Ship, Gameboard, Player, AI } from "./game";
import "./styles.css";

document.addEventListener("DOMContentLoaded", (event) => {
  const player = new Player();
  const ai = new AI();

  player.chooseEnemy(ai);
  ai.chooseEnemy(player);

  const playerShip = new Ship(5);
  const AIShip = new Ship(5);

  player.gameboard.placeShip(playerShip, 0, 0);
  ai.gameboard.placeShip(AIShip, 0, 0);

  const AIBoard = document.querySelectorAll(".ai-board .square");
  AIBoard.forEach((square) => {
    square.addEventListener("click", () => {
      const coordinates = square.id.split;
      player.attack(coordinates[0], coordinates[1]);
      setTimeout(() => {
        ai.attack();
      }, 1000);
    });
  });
});
