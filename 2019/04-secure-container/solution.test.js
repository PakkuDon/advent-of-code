const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of valid passwords in input range", () => {
    expect(part1("111111-111111")).toEqual(1)
    expect(part1("223450-223455")).toEqual(1)
    expect(part1("123789-123789")).toEqual(0)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
