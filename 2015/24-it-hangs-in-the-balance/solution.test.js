const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns quantum entanglement of first group in ideal configuration", () => {
    const input = `1
2
3
4
5
7
8
9
10
11`
    expect(part1(input)).toEqual(99)
  })
})

describe("part2", () => {
  test("returns quantum entanglement of first group in ideal configuration given 4 compartments", () => {
    const input = `1
2
3
4
5
7
8
9
10
11`
    expect(part2(input)).toEqual(44)
  })
})
