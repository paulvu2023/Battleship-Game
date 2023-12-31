import { experiments } from "webpack";
import { Ship, Gameboard, Player, AI } from "./game";

describe("Player and AI", () => {
  it("properly attacks and receive attacks", () => {
    const player = new Player();
    const ai = new AI();

    player.chooseEnemy(ai);
    ai.chooseEnemy(player);

    const playerShip = new Ship(3);
    const aiShip = new Ship(1);

    player.gameboard.placeShip(playerShip, 0, 0);
    ai.gameboard.placeShip(aiShip, 0, 0);

    player.attack(0, 0);
    expect(ai.gameboard.board[0][0]).toBe("Hit");
    expect(ai.gameboard.countShips()).toBe(0);
  });
});

describe("Gameboard", () => {
  it("properly places ships on the board", () => {
    const board = new Gameboard();
    const ship = new Ship(2);
    const ship2 = new Ship(5);

    const ship1Result = board.placeShip(ship, 0, 0);
    expect(ship1Result).toBe(true);
    expect(board.board[0][0]).toEqual({ ship, index: 1 }); // Index starts at 1
    expect(board.board[0][1]).toEqual({ ship, index: 2 });

    const ship2Result = board.placeShip(ship2, 9, 9, "horizontal");
    expect(ship2Result).toBe(false);
    expect(board.board[9][9]).toBe(null);
  });

  it("correctly handles attacks", () => {
    const board = new Gameboard();
    const ship = new Ship(1);
    board.placeShip(ship, 0, 0);
    expect(board.countShips()).toBe(1);

    const hit = board.receiveAttack(0, 0);
    const miss = board.receiveAttack(9, 9);
    expect(hit).toBe(true);
    expect(miss).toBe(false);
    expect(board.countShips()).toBe(0);

    expect(board.board[0][0]).toBe("Hit");
    expect(board.board[9][9]).toBe("Miss");
  });
});

describe("Ship", () => {
  it("sink when the # of times it has been hit = length", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
