const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns count of unique coordinates visited by tail of rope", () => {
    const input = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"]
    expect(part1(input)).toEqual(13)
  })
})

describe("part2", () => {
  test("returns count of unique coordinates visited by tail of rope with 10 knots", () => {
    const input = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"]
    expect(part2(input)).toEqual(1)
  })

  test("larger sample", () => {
    const input = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"]
    expect(part2(input)).toEqual(36)
  })
})
