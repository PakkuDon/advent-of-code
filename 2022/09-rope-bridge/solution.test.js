const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns count of unique coordinates visited by tail of rope", () => {
    const input = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"]
    expect(part1(input)).toEqual(13)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
