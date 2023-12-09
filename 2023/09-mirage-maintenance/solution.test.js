const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of extrapolated values", () => {
    const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`
    expect(part1(input)).toEqual(114)
  })

  test("returns sum of extrapolated values when sequence contains negative numbers", () => {
    const input = `0 -3 -6 -9 -12 -15`
    expect(part1(input)).toEqual(-18)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
