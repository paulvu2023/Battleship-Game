class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.shipCount = 0;
  }

  receiveAttack(xCoord, yCoord) {
    if (this.board[xCoord][yCoord] !== null) {
      if (typeof this.board[xCoord][yCoord] === "object") {
        this.board[xCoord][yCoord].ship.hit();
        this.board[xCoord][yCoord] = "Hit";
        if (this.board[xCoord][yCoord].ship.isSunk()) {
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
        let index = 1;
        for (let i = yCoord; i < yCoord + ship.length; i++) {
          this.board[xCoord][i] = { ship, index };
          index += 1;
        }
      } else {
        let index = 1;
        for (let i = xCoord; i < xCoord + ship.length; i++) {
          this.board[i][yCoord] = { ship, index };
          index += 1;
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
  }

  isSunk() {
    if (!this.sunk && this.hits >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export { Ship, Gameboard };
