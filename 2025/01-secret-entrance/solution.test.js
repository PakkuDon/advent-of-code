const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns password generated from instructions", () => {
    const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`
    expect(part1(input)).toEqual(3)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
