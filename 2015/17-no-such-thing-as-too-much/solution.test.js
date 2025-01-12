const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of combinations that add to given sum", () => {
    const input = `20
15
10
5
5`
    expect(part1(input, 25)).toEqual(4)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
