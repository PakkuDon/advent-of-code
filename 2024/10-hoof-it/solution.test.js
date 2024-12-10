const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of score for all trailheads", () => {
    const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`
    expect(part1(input)).toEqual(36)
  })
})

describe("part2", () => {
  test("returns sum of all trailhead ratings", () => {
    const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`
    expect(part2(input)).toEqual(81)
  })
})
