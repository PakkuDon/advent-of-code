const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns code given instructions", () => {
    const input = `ULL
RRDDD
LURDL
UUUUD`
    expect(part1(input)).toEqual("1985")
  })
})

describe("part2", () => {
  test("returns code given instructions with new keypad", () => {
    const input = `ULL
RRDDD
LURDL
UUUUD`
    expect(part2(input)).toEqual("5DB3")
  })
})
