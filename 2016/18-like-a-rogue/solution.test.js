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

describe("part2", () => {
  xtest("no example output provided", () => {})
})
