const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns lowest IP address that is not blocked", () => {
    const input = `5-8
0-2
4-7`
    expect(part1(input)).toEqual(3)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
