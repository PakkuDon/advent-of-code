const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of valid passwords in input range", () => {
    expect(part1("111111-111111")).toEqual(1)
    expect(part1("223450-223455")).toEqual(1)
    expect(part1("123789-123789")).toEqual(0)
  })
})

describe("part2", () => {
  test("returns number of valid passwords in input range", () => {
    expect(part2("112233-112233")).toEqual(1)
    expect(part2("123444-123444")).toEqual(0)
    expect(part2("111122-111122")).toEqual(1)
  })
})
