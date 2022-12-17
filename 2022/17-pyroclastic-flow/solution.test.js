const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("measures how tall the tower will be after 2022 blocks have settled", () => {
    const input = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>"
    expect(part1(input)).toEqual(3068)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
