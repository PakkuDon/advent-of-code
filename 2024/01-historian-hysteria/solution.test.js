const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns total distance between both lists", () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`
    expect(part1(input)).toEqual(11)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
