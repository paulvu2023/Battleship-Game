class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.enemy = null;
  }

  attack(xCoord, yCoord) {
    this.enemy.receiveAttack(xCoord, yCoord);
  }

  receiveAttack(xCoord, yCoord) {
    this.gameboard.receiveAttack(xCoord, yCoord);
  }

  chooseEnemy(player) {
    this.enemy = player;
  }
}
class AI extends Player {
  constructor() {
    super();
    this.attacks = []; // array of previous attacks. Example: '09' = coordinates[0][9]
  }

  attack() {
    let xCoord = Math.floor(Math.random() * 10);
    let yCoord = Math.floor(Math.random() * 10);
    while (this.attacks.includes(`${xCoord}${yCoord}`)) {
      xCoord = Math.floor(Math.random() * 10);
      yCoord = Math.floor(Math.random() * 10);
    }
    this.attacks.push(`${xCoord}${yCoord}`);
    this.enemy.receiveAttack(xCoord, yCoord);
  }
}

class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.shipCount = 0;
  }

  countShips() {
    return this.shipCount;
  }

  receiveAttack(xCoord, yCoord) {
    if (this.board[xCoord][yCoord] !== null) {
      const boardObject = this.board[xCoord][yCoord];
      if (typeof boardObject === "object" && boardObject instanceof Ship) {
        boardObject.hit();
        this.board[xCoord][yCoord] = "Hit";
        if (boardObject.isSunk()) {
          this.shipCount -= 1;
        }
        return true;
      }
      return false;
    } else {
      this.board[xCoord][yCoord] = "Miss";
      return false;
    }
  }

  placeShip(ship, xCoord, yCoord, direction = "vertical") {
    if (this.isValidPlacement(ship, xCoord, yCoord, direction)) {
      if (direction === "vertical") {
        for (let i = xCoord; i < xCoord + ship.length; i++) {
          this.board[i][yCoord] = ship;
        }
      } else {
        for (let i = yCoord; i < yCoord + ship.length; i++) {
          this.board[xCoord][i] = ship;
        }
      }
      this.shipCount += 1;
      return true;
    } else {
      return false;
    }
  }

  isValidPlacement(ship, xCoord, yCoord, direction = "vertical") {
    if (xCoord < 0 || yCoord < 0) {
      return false;
    }

    if (direction === "vertical") {
      if (
        xCoord + ship.length > this.board.length ||
        yCoord >= this.board[0].length
      ) {
        return false;
      }

      for (let i = xCoord; i < xCoord + ship.length; i++) {
        if (this.board[i][yCoord] !== null) {
          return false;
        }
      }
    } else {
      if (
        yCoord + ship.length > this.board[0].length ||
        xCoord >= this.board.length
      ) {
        return false;
      }

      for (let i = yCoord; i < yCoord + ship.length; i++) {
        if (this.board[xCoord][i] !== null) {
          return false;
        }
      }
    }
    return true;
  }
}

class Ship {
  constructor(shipLength) {
    this.length = shipLength;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
    this.isSunk();
  }

  isSunk() {
    if (!this.sunk && this.hits >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export { Ship, Gameboard, Player, AI };
