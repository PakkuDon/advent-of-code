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

describe("part2", () => {
  test("counts number of times dial points to 0 during rotations", () => {
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
    expect(part2(input)).toEqual(6)
  })
})
