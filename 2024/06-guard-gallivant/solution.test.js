const { part1, part2 } = require("./solution")

describe("part1", () => {
  test("returns how many distinct positions guard visits", () => {
    const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`
    expect(part1(input)).toEqual(41)
  })
})

xdescribe("part2", () => {
  test("returns something", () => {
    const input = `puzzle input`
    expect(part2(input)).toEqual(0)
  })
})
