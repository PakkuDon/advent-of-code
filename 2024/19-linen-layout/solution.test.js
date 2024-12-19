const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns number of patterns that can be created with towels", () => {
    const input = `r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`
    expect(part1(input)).toEqual(6)
  })
})

describe("part2", () => {
  test("returns number of possible ways patterns can be made", () => {
    const input = `r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`
    expect(part2(input)).toEqual(16)
  })
})
