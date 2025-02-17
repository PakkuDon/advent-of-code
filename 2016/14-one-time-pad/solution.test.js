const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns index that produces 64th key", () => {
    const input = `abc`
    expect(part1(input)).toEqual(22728)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
