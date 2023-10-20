class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
  }

  placeShip(ship, xCoord, yCoord, direction = "vertical") {
    if (direction === "vertical") {
      for (let i = yCoord; i < yCoord + ship.length; i++) {
        if (this.board[xCoord][i] && this.board[xCoord][i] === null) {
          this.board[xCoord][i] = ship;
        } else {
          return false;
        }
      }
    } else {
      for (let i = xCoord; i < xCoord + ship.length; i++) {
        if (this.board[i][yCoord] && this.board[i][yCoord] === null) {
          this.board[i][yCoord] = ship;
        } else {
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
  }

  isSunk() {
    if (!this.sunk && this.hits >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export { Ship, Gameboard };
