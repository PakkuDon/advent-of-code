const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of 2000th secret number for each buyer ", () => {
    const input = `1
10
100
2024`
    expect(part1(input)).toEqual(37327623n)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
