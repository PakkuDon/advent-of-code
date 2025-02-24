const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns checksum of value to fill disk", () => {
    const input = `10000`
    expect(part1(input, 20)).toEqual("01100")
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
