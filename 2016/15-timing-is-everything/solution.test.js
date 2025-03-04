const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns first time to press that awards capsule", () => {
    const input = `Disc #1 has 5 positions; at time=0, it is at position 4.
Disc #2 has 2 positions; at time=0, it is at position 1.`
    expect(part1(input)).toEqual(5)
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
