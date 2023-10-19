import { Ship } from "./game";

describe("Ship", () => {
  it("sink when the # of times it has been hit = length", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
