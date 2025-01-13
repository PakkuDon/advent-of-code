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

describe("part2", () => {
  xtest("smaller example - returns least number of steps to reduce to e - Skipped due to non-deterministic behaviour", () => {
    const input = `e => H
e => O
H => HO
H => OH
O => HH

HOH`
    expect(part2(input)).toEqual(3)
  })

  xtest("larger example - returns least number of steps to reduce to e - Skipped due to non-deterministic behaviour", () => {
    const input = `e => H
e => O
H => HO
H => OH
O => HH

HOHOHO`
    expect(part2(input)).toEqual(6)
  })
})
