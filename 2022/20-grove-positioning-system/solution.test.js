const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns the sum of the three numbers that form the coordinates", () => {
    const input = [1, 2, -3, 3, -2, 0, 4]
    expect(part1(input)).toEqual(3)
  })
})

describe("part2", () => {
  test("returns the sum of coordinates after applying decryption key", () => {
    const input = [1, 2, -3, 3, -2, 0, 4]
    expect(part2(input)).toEqual(1623178306)
  })
})
