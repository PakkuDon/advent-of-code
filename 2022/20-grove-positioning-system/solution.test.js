const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns the sum of the three numbers that form the coordinates", () => {
    const input = [1, 2, -3, 3, -2, 0, 4]
    expect(part1(input)).toEqual(3)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
