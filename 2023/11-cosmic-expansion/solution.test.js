const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns sum of shortest paths between all pairs of galaxies", () => {
    const input = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`
    expect(part1(input)).toEqual(374)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
