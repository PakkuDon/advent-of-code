const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns total price of fencing all regions in garden plot", () => {
    const input = `RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`
    expect(part1(input)).toEqual(1930)
  })
})

describe("part2", () => {
  test("returns total price of fencing with updated algorithm", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
