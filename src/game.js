class Ship {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (!this.sunk && this.hits >= this.shipLength) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export { Ship };
