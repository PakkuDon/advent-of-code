const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns total amount of wrapping paper required", () => {
    const input = `2x3x4
1x1x10`
    expect(part1(input)).toEqual(101)
  })
})

describe("part2", () => {
  test("returns total amount of ribbon required", () => {
    const input = `2x3x4
1x1x10`
    expect(part2(input)).toEqual(48)
  })
})
