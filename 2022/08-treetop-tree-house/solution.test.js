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

describe("part2", () => {
  test("returns scenic score for ideal spot for tree house", () => {
    const input = `
30373
25512
65332
33549
35390
    `
    expect(part2(input)).toEqual(8)
  })
})
