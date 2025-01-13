const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("smaller example - returns number of distinct molecules", () => {
    const input = `H => HO
H => OH
O => HH

HOH`
    expect(part1(input)).toEqual(4)
  })

  test("larger example - returns number of distinct molecules", () => {
    const input = `H => HO
H => OH
O => HH

HOHOHO`
    expect(part1(input)).toEqual(7)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
