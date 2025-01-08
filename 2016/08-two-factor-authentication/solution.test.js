const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of pixels lit after processing instructions", () => {
    const input = `rect 3x2
rotate column x=1 by 1
rotate row y=0 by 4
rotate column x=1 by 1`
    expect(part1(input)).toEqual(6)
  })
})

describe("part2", () => {
  xtest("no example output provided", () => {})
})
