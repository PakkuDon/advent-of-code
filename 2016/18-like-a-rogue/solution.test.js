const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("example 1 - returns number of safe tiles over given rows", () => {
    const input = `..^^.`
    expect(part1(input, 3)).toEqual(6)
  })

  test("example 2 - returns number of safe tiles over given rows", () => {
    const input = `.^^.^.^^^^`
    expect(part1(input, 10)).toEqual(38)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
