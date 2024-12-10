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

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
