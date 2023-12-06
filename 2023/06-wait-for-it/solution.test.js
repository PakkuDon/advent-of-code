const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns product of number of ways to win for each race", () => {
    const input = `
Time:      7  15   30
Distance:  9  40  200`
    expect(part1(input)).toEqual(288)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
