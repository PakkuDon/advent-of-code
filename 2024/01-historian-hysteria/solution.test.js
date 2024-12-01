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

describe("part2", () => {
  test("returns similarity score of both lists", () => {
    const input = `3   4
4   3
2   5
1   3
3   9
3   3`
    expect(part2(input)).toEqual(31)
  })
})
