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

describe("part2", () => {
  test("returns number of combinations with least required containers that add to given sum", () => {
    const input = `20
15
10
5
5`
    expect(part2(input, 25)).toEqual(3)
  })
})
