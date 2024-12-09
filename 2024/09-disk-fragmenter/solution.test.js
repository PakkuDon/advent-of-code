const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns filesystem checksum", () => {
    const input = `2333133121414131402`
    expect(part1(input)).toEqual(1928)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
