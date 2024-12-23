const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns the sum of complexities of codes in list", () => {
    const input = `029A
980A
179A
456A
379A`
    expect(part1(input)).toEqual(126384)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
