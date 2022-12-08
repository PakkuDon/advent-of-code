const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns something", () => {
    const input = `
30373
25512
65332
33549
35390
    `
    expect(part1(input)).toEqual(21)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = ["a value"]
    expect(part2(input)).toEqual(0)
  })
})
