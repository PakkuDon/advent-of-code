const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many units of sand come to a rest given a rock formation", () => {
    const input = `498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`
    expect(part1(input)).toEqual(24)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
